import React from "react";

import { useEffect, useState } from "react";
import { deleteAppointment, getAppointments, sendReminder, updateAppointment } from "../../api/appointment.js";

import "./Dashboard.css";

import toast from "react-hot-toast";

const Dashboard = () => {

    const [appointments, setAppointments] = useState([]);

    //To get all the appointments
    const fetchData = async () => {
        try {
            const res = await getAppointments();
            //console.log(res.data);
            //res.data gives the array which contains all the appointments as objects
            //res.data.data gives all the appointment objects
            setAppointments(res.data.data);
        } catch (error) {
            toast.error("Failed to fetch appointments")
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //to update the status of the appointment
    const handleStatusChange = async (id, status) => {
        try {
            await updateAppointment(id, status);
            toast.success("Status Updated");
            fetchData();
        } catch (error) {
            toast.error("Update Failed");
        }
    }

    //to delete a particular appointment
    const handleDelete = async (id) => {
        try {
            await deleteAppointment(id);
            toast.success("Deleted Successfully");
            fetchData();
        } catch (error) {
            toast.error("Delete Failed");
        }
    };

    //to handle remind the user by admin
    const handleReminder = async (id) => {
        try {
            await sendReminder(id);
            toast.success("Reminder sent");
        } catch (error) {
            toast.error("Failed to send remainder");
        }
    };



    //to handle logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <div className="dashboard">

            <button onClick={handleLogout} className="logout-btn">Logout</button>

            <h2 className="dashboard-title">Admin Dashboard</h2>

            <div className="table-container">

                <table className="appointment-table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            appointments.map((item) => {
                                return (
                                    <tr key={item._id}>

                                        <td>{item.name}</td>

                                        <td>{item.phone}</td>

                                        <td>
                                            {new Date(item.date).toLocaleDateString()}
                                        </td>

                                        <td>
                                            <span className={`status ${item.status.toLowerCase()}`}>
                                                {item.status}
                                            </span>

                                            <select value={item.status}
                                                onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                            >
                                                <option>Pending</option>
                                                <option>Confirmed</option>
                                                <option>Completed</option>
                                                <option>Cancelled</option>
                                            </select>
                                        </td>

                                        <td>

                                            {/* Remind button */}
                                            <button
                                                className="remind-btn"
                                                onClick={() => handleReminder(item._id)}
                                            >
                                                Remind
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>


                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>

            </div>
        </div>
    )
}
export default Dashboard;