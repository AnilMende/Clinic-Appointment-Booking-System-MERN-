
import React, { useState } from "react";
import "./BookingForm.css";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {

    //const base_url = "http://localhost:5000/api";
    const base_url = "https://clinic-appointment-backend-5yzs.onrender.com/api"

    //when the reponse is submitting the button will be in loading state i.e.. Booking
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        gender: "",
        age: "",
        phone: "",
        date: "",
        session: ""

    })

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            setLoading(true);

            const response = await axios.post(`${base_url}/appointments`, formData);

            const appointment = response.data.data;

            toast.success(response.data.message, {
                borderRadius: "8px",
                background: "#333",
                color: "#fff"
            });

            setFormData({
                name: "",
                email: "",
                service: "",
                gender: "",
                age: "",
                phone: "",
                date: "",
                session: ""
            });

        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    //helps in blocking the selection of the past dates
    const today = new Date().toISOString().split("T")[0];

    return (
        <div id="booking-form" className="booking">

            <div className="booking-container">

                <h2>Book Your Session</h2>

                <form onSubmit={handleSubmit} className="booking-form">

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Select Service</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Service</option>
                        <option>Dry Cupping</option>
                        <option>Wet Cupping</option>
                        <option>Fire Cupping</option>
                        <option>Facial Cupping</option>
                        <option>Massage Therapy</option>
                        <option>Derma Planning</option>
                    </select>


                    <label>Select Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                    </select>

                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        max="100"
                        required
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    {/* 🔥 Fixed Date Field */}
                    <label>Select Appointment Date</label>

                    <DatePicker
                        selected={formData.date ? new Date(formData.date + "T00:00:00") : null}
                        onChange={(date) => {

                            if (!date) {
                                setFormData({
                                    ...formData,
                                    date: "",
                                });
                            } else {
                                setFormData({
                                    ...formData,
                                    date: date.toISOString().split("T")[0], // keeps backend format SAME
                                })
                            }
                        }

                        }
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        isClearable
                        className="custom-date-picker"
                    />

                    <label>Select Session</label>
                    <select
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Session</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                    </select>

                    <button type="submit" disabled={loading}>
                        {loading ? "Booking..." : "Book Appointment"}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default BookingForm;
