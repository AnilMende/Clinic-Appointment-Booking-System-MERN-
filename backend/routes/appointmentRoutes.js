import express from "express";

import { createAppointment, deleteAppointment, getAllAppointments, 
         getAppointment, 
         updateAppointmentStatus } from "../controllers/appointmentController.js";
         
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/appointments", createAppointment);

router.get("/appointments/:id", getAppointment);

// Admin Routes uses the Middleware for the verification

router.get("/admin/appointments", authMiddleware ,getAllAppointments);


router.put("/admin/update-appointments/:id", authMiddleware, updateAppointmentStatus);

router.delete("/admin/delete-appointment/:id", authMiddleware, deleteAppointment);

export default router;