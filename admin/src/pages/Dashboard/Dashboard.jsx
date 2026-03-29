import React from "react";

import { useEffect, useState } from "react";
import { deleteAppointment, getAppointments, sendReminder, updateAppointment } from "../../api/appointment.js";

import "./Dashboard.css";

import toast from "react-hot-toast";
import Modal from "../../components/Modal/Modal.jsx";

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
    // const handleDelete = async (id) => {
    //     try {
    //         await deleteAppointment(id);
    //         toast.success("Deleted Successfully");
    //         fetchData();
    //     } catch (error) {
    //         toast.error("Delete Failed");
    //     }
    // };

    //to handle remind the user by admin
    // const handleReminder = async (id) => {
    //     try {
    //         await sendReminder(id);
    //         toast.success("Reminder sent");
    //     } catch (error) {
    //         toast.error("Failed to send remainder");
    //     }
    // };
    //to handle logout
    // const handleLogout = () => {
    //     localStorage.removeItem("token");
    //     window.location.href = "/login";
    // }

    // for the confirmations of remainder, deletion
    const [modal, setModal] = useState({
        isOpen: false,
        type: "",
        id: null
    });

    //for opening the modal
    const openModal = (type, id = null) => {
        setModal({ isOpen: true, type, id });
    }

    //for closing the modal
    const closeModal = () => {
        setModal({ isOpen: false, type: "", id: null });
    }

    const getModalContent = () => {

        switch (modal.type) {

            case "remind":
                return {
                    title: "Send Reminder?",
                    message: "Are you sure you want to send this remainder?"
                };

            case "delete":
                return {
                    title: "Delete Appointment?",
                    message: "This action can not be done"
                };

            case "logout":
                return {
                    title: "Logout?",
                    message: "Are you sure you want to logout?"
                };

            default:
                return {};
        }
    }

    const handleConfirm = async () => {
        try {

            if (modal.type === "remind") {
                await sendReminder(modal.id);
                toast.success("Reminder Sent");
            }

            if (modal.type === "delete") {
                await deleteAppointment(modal.id);
                toast.success("Deletion Successful");
            }

            if (modal.type === "logout") {
                localStorage.removeItem("token");
                window.location.href = "/auth";
            }

        } catch (error) {
            toast.error("Action Failed");

        } finally {
            closeModal();
        }
    }

    const { title, message } = getModalContent();


    return (
        <div className="dashboard">

            <button onClick={() => openModal("logout")} className="logout-btn">Logout</button>

            <h2 className="dashboard-title">Admin Dashboard</h2>

            <div className="table-container">

                <table className="appointment-table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Session</th>
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
                                            {item.session}
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

                                        <td className="buttons">

                                            {/* Remind button */}
                                            <button
                                                className="remind-btn"
                                                onClick={() => openModal("remind", item._id)}
                                            >
                                                Remind
                                            </button>

                                            {/* Delete button */}
                                            <button
                                                className="delete-btn"
                                                onClick={() => openModal("delete", item._id)}
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

            {/* For Mobile View We are adding card view for the Dashboard */}
            <div className="card-view">
                {
                    appointments.map((item) => (
                        <div className="appointment-card" key={item._id}>
                            <p><strong>Name:</strong> {item.name}</p>
                            <p><strong>Phone:</strong> {item.phone}</p>
                            <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                            <p><strong>Session:</strong> {item.session}</p>

                            <p className="status-row">

                                <strong>Status:</strong>

                                {/* Status Badge: */}
                                <span className={`status-badge ${item.status.toLowerCase()}`}>
                                    {item.status}
                                </span>

                                {/* Dropdown */}
                                <select className="status-select"
                                    value={item.status}
                                    onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                >
                                    <option>Pending</option>
                                    <option>Confirmed</option>
                                    <option>Completed</option>
                                    <option>Cancelled</option>

                                </select>
                            </p>

                            <div className="card-actions">

                                <button
                                    className="remind-btn"
                                    onClick={() => openModal("remind", item._id)}
                                >
                                    Remind
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => openModal("delete", item._id)}
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))
                }
            </div>

            <Modal
                isOpen={modal.isOpen}
                title={title}
                message={message}
                onConfirm={handleConfirm}
                onCancel={closeModal}
            />
        </div>
    )
}
export default Dashboard;