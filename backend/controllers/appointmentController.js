import Appointment from "../models/Appointment.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { sendEmail } from "../utils/sendEmail.js";


//Create Appointment
export const createAppointment = asyncHandler(async (req, res) => {

    //Destruture only when the user provides
    const { name, email, service, gender, age, phone, date, session } = req.body;

    if (!name || !email || !service || !gender || !age || !phone || !date || !session) {
        throw new ApiError(400, "All fields are required");
    }

    //Date validation : useful incase if the user enters the past date
    const bookingDate = new Date(date);
    const today = new Date();

    //removing the hours from today i.e. we only comparing the YYYY-MM-DD
    //this help in the accurate comparison
    today.setHours(0, 0, 0, 0);

    if (bookingDate < today) {
        throw new ApiError(400, "Cannot book an appointment in the past");
    }

    //creating the document
    const appointment = await Appointment.create({
        name, email, service, gender, age, phone, date, session
    });

    //send the email about the appointment to the admin
    await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Appointment Booked",
        text: `New Appointment : 
        Name : ${name}
        Email : ${email}
        Phone : ${phone}
        Service : ${service}
        Date : ${date}
        Session : ${session}
        `
    })

    //return success
    return res.status(201).json(
        new ApiResponse(201, appointment, "Appointment booked successfully")
    )
})


//Get Appointments or for admin to view all bookings
//Admin sees all bookings
export const getAllAppointments = asyncHandler(async (req, res) => {

    //Fetch all appointments, sorted by most recent first
    const data = await Appointment.find().sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, data, "All Appointments")
    )
})


//Update appointments status
export const updateAppointmentStatus = asyncHandler(async (req, res) => {

    //Get Id from the params
    const { id } = req.params;
    const { status } = req.body;

    //Validate the status provided and it should be in one of the Enum values
    const allowedStatuses = ["Pending", "Confirmed", "Completed", "Cancelled"];
    if (!allowedStatuses.includes(status)) {
        throw new ApiError(400, "Invalid status value");
    }

    //Finding and updating
    const updatedAppointment = await Appointment.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
    )

    if (!updatedAppointment) {
        throw new ApiError(404, "Appointment not found");
    }

    return res.status(200).json(
        new ApiResponse(200, updatedAppointment, "Status updated successfully")
    )
})

//Delete Appointment
export const deleteAppointment = asyncHandler(async (req, res) => {

    const { id } = req.params;

    //Perform the delete
    const deletedUser = await Appointment.findByIdAndDelete(id);

    if (!deletedUser) {
        throw new ApiError(404, "Appointment not found");
    }

    return res.status(200).json(
        new ApiResponse(200, deletedUser, "Appointment deleted successfully")
    )
})

//To get a Single Appointment By Id
export const getAppointment = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(200, appointment, "Appointment fetched successfully")
    )
})

//Remind User About the Appointment By Admin
export const sendReminder = asyncHandler(async (req, res) => {

    //take the id of the user
    const { id } = req.params;

    //find the appointment with that id
    const appointment = await Appointment.findById( id );

    //if the appointment is not avialable
    if(!appointment){
        throw new ApiError(404, "Appointment nor found");
    }

    //then send the email
    //take the details from the appointment
    await sendEmail({
        to : appointment.email,
        subject : "Appointment Reminder",
        text : `
        Hello : ${appointment.name},
        
        Your appointment is scheduled: 

        Service : ${appointment.service}
        Date : ${appointment.date}
        session : ${appointment.session}


        Please be available.

        Thank you.
        `
    });

    return res.status(200).json({
        message : "Reminder sent Successfully"
    });
})