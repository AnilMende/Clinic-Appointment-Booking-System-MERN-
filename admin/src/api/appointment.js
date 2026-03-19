import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:5000/api"
})

export const getAppointments = () => API.get("/admin/appointments");

export const updateAppointment = (id, status) => API.put(`/admin/update-appointments/${id}`, {status});

export const deleteAppointment = (id) => API.delete(`/admin/delete-appointment/${id}`);