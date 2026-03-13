import express from "express";
import { createAppointment, deleteAppointment, getAllAppointments, 
         getAppointment, 
         updateAppointmentStatus } from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/appointments", createAppointment);

router.get("/appointments", getAllAppointments);

router.get("/appointments/:id", getAppointment);

router.put("/appointments/:id", updateAppointmentStatus);

router.delete("/appointments/:id", deleteAppointment);

export default router;