
import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: ""

    })

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Appointment Booked Successfully");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: ""
                });

            } else {
                alert(data.message || "Something went wrong");
            }

        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    }

    //helps in blocking the selection of the past dates
    const today = new Date().toISOString().split("T")[0];

    return (
        <div id="booking-form" className="booking">

            <div className="booking-container">

                <h2>Book Your Session</h2>

                <form onSubmit={handleSubmit} className="booking-form">

                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                    />

                    <button type="submit">Book Appointment</button>
                </form>

            </div>

        </div>
    )
}

export default BookingForm;