
import React, { useState } from "react";
import "./BookingForm.css";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect } from "react";

const BookingForm = () => {

    //const base_url = "http://localhost:5000/api";
    const base_url = "https://clinic-appointment-backend-5yzs.onrender.com/api"

    //when the reponse is submitting the button will be in loading state i.e.. Booking
    const [loading, setLoading] = useState(false);

    const [loadingSessions, setLoadingSessions] = useState(false);

    const [availableSessions, setAvailableSessions] = useState([]);

    const [sessionCache, setSessionCache] = useState([]);

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

    // function to fecth all available sessions
    const fetchAvailableSessions = async (selectedDate) => {

        // Check cache first
        if (sessionCache[selectedDate]) {

            setAvailableSessions(sessionCache[selectedDate]);

            return;
        }

        try {

            setLoadingSessions(true);

            const response = await axios.get(
                `${base_url}/appointments/available-sessions`,
                {
                    params: {
                        date: selectedDate
                    }
                }
            );

            const sessions = response.data.data.availableSessions;

            setAvailableSessions(sessions);

            // Store in cache
            setSessionCache(prev => ({
                ...prev,
                [selectedDate]: sessions
            }));

        } catch (error) {

            setAvailableSessions([]);

            toast.error(
                error?.response?.data?.message ||
                "Failed to fetch available sessions"
            );

        } finally {

            setLoadingSessions(false);

        }

    };

    useEffect(() => {

        if (formData.date) {
            fetchAvailableSessions(formData.date);
        } else {
            setAvailableSessions([]);
        }

    }, [formData.date]);


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

            // Update cached sessions for this date
            setSessionCache(prev => {

                if (!prev[formData.date]) {
                    return prev;
                }

                return {
                    ...prev,
                    [formData.date]: prev[formData.date].filter(
                        session => session !== formData.session
                    )
                };

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
                        selected={
                            formData.date
                                ? new Date(`${formData.date}T12:00:00`)
                                : null
                        }
                        onChange={(date) => {

                            if (!date) {

                                setFormData(prev => ({
                                    ...prev,
                                    date: "",
                                    session: ""
                                }));

                                return;
                            }

                            const formattedDate = [
                                date.getFullYear(),
                                String(date.getMonth() + 1).padStart(2, "0"),
                                String(date.getDate()).padStart(2, "0")
                            ].join("-");

                            setFormData(prev => ({
                                ...prev,
                                date: formattedDate,
                                session: ""
                            }));

                        }}

                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        isClearable
                        className="custom-date-picker"
                    />
                    {
                        loadingSessions && (
                            <p className="loading-session-message">
                                Loading available sessions...
                            </p>
                        )
                    }

                    <label>Select Session</label>
                    <select
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        required
                        disabled={
                            !formData.date ||
                            loadingSessions ||
                            availableSessions.length === 0
                        }
                    >

                        <option value="" disabled>

                            {
                                !formData.date
                                    ? "Select a date first"
                                    : loadingSessions
                                        ? "Loading sessions..."
                                        : availableSessions.length === 0
                                            ? "No sessions available"
                                            : "Select Session"
                            }

                        </option>

                        {
                            availableSessions.map((session) => (
                                <option
                                    key={session}
                                    value={session}
                                >
                                    {session}
                                </option>
                            ))
                        }

                    </select>
                    {
                        formData.date &&
                        availableSessions.length === 0 && (

                            <p className="no-session-message">
                                No sessions are available for the selected date.
                            </p>

                        )
                    }

                    <button type="submit" disabled={loading || !formData.session}>
                        {loading ? "Booking..." : "Book Appointment"}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default BookingForm;
