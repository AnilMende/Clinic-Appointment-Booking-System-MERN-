
# 🏥 Clinic Appointment Booking System (MERN)

A full-stack Clinic Appointment Booking System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables patients to book appointments, and admins to oversee the entire system efficiently.

---

## 🚀 Project Overview

This platform simplifies the traditional appointment booking process by digitizing it into a seamless web experience.

Users can:
- Book appointments online
- Manage schedules
- Track appointment status in real-time
- Admin can remind the users about their appointment by sending emails.

Admins get dashboards to manage operations effectively.

---

## ✨ Features

### 👤 User (Patient)
- Register & Login (JWT Authentication)
- Book appointments with doctors
- View appointment history
- Cancel appointments
- Update profile

### 🛠️ Admin
- Login & dashboard access
- View assigned appointments
- View all users & appointments
- Accept / Reject / Complete appointments


---

## 🧱 Tech Stack

### Frontend
- React.js
- Tailwind CSS / CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- REST APIs

---

## 📂 Project Structure
Clinic-Appointment-Booking-System-MERN/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
│
├── Admin/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
|
└── README.md

---

🔗 API Endpoints

User Routes:

->POST /api/user/book-appointment

Admin Routes:

->POST /api/admin/login
->PORT /api/admin/register
->GET /api/admin/appointments
->POST /api/admin/update-status

---

🌐 Deployment

Frontend:

-> Vercel 

Backend:

-> Render 

Database:

-> MongoDB Atlas

---
## 🚀 Live Demo

-> Frontend : https://alhijama-clinic.vercel.app/

-> Admin Dashboard : https://alhijama-admin-dashboard.vercel.app/
