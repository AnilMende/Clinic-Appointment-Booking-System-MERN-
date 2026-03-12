import express from "express";
import { createAppointment, deleteAppointment, getAllAppointments, 
         updateAppointmentStatus } from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/create-appointments", createAppointment);

router.get("/admin/appointments", getAllAppointments);

router.put("/admin/update-appointments/:id", updateAppointmentStatus);

router.delete("/admin/delete-appointment/:id", deleteAppointment);

export default router;