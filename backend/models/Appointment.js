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
    service: {
        type : String,
        required : true,
        trim : true,
        enum : ["Dry Cupping", "Wet Cupping", "Fire Cupping", "Facial Cupping", "Massage Therapy", "Derma Planning"]
    },
    gender : {
        type : String,
        enum : ["Male", "Female", "Prefer not to say"],
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : [0, 'Age can not be negative'],
        max : [100, "Please provide a valid age"]
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
    session : {
        type : String,
        required : true,
        enum : ["Morning", "Afternoon", "Evening"]
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
        default: "Pending"
    }

}, { timestamps: true })

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;