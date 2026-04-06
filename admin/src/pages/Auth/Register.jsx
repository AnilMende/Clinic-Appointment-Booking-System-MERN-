import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";

import "./Auth.css";
import { Link } from "react-router-dom";

const Register = () => {

    const backend_url = "https://clinic-appointment-backend-5yzs.onrender.com/api";
    //const backend_url = "http://localhost:5000/api";

    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${backend_url}/auth/register`, form);

            localStorage.setItem("token", res.data.token);

            toast.success("Registered Successfully");

            window.location.href = "/"

        } catch (error) {
            toast.error(error.response?.data?.message || "Registration Failed");
        }
    };

    return (
        <div className="auth-container">

            <h2>Admin Register</h2>

            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
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

                <button type="submit">Register</button>

                <p className="auth-redirect">Already Have an Account <Link to="/login">Login</Link></p>
            </form>

        </div>
    )
}

export default Register;
