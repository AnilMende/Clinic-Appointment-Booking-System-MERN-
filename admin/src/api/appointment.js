import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:5000/api"
})


API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");

    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
})

export const getAppointments = () => API.get("/admin/appointments");

export const updateAppointment = (id, status) => API.put(`/admin/update-appointments/${id}`, {status});

export const deleteAppointment = (id) => API.delete(`/admin/delete-appointment/${id}`);

export const sendReminder = (id) => API.post(`/admin/remind/${id}`);
