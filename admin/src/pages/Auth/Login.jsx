import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {

    const backend_url = "https://clinic-appointment-backend-8545.onrender.com/api"

    const [form, setForm] = useState({ email: "", passowrd: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(`${backend_url}/auth/login`, form);

            localStorage.setItem("token", res.data.token);

            toast.success("Login Successful");

            window.location.href = "/";

        } catch (error) {
            toast.error("Invalid credentials");
        }
    };

    return (
        <div className="auth-container">
            <h2>Admin Login</h2>

            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button type="submit">Login</button>

                <p className="auth-redirect">Create a New Account <Link to="/register">Click Here</Link></p>
            </form>
        </div>
    )
}

export default Login;
