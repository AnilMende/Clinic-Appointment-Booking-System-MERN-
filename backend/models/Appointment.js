import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^\+?[1-9]\d{6,14}$/, 'Please provide a valid phone number']
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
        default: "Pending"
    }

}, { timestamps: true })

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;