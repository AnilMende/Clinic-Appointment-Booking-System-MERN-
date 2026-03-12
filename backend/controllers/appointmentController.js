import Appointment from "../models/Appointment.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";


//Create Appointment
export const createAppointment = asyncHandler(async (req,res) => {

    //Destruture only when the user provides
    const { name, email, phone, date } = req.body;

    //Validation check
    if( !name || !email || !phone || !date ){
        throw new ApiError(400, "All fields are required");
    }

    //creating the document
    const data = await Appointment.create({
        name, email, phone, date
    });

    //return success
    return res.status(201).json(
        new ApiResponse(201, data, "Appointment booked successfully" )
    )
})


//Get Appointments or for admin to view all bookings
//Admin sees all bookings
export const getAllAppointments = asyncHandler (async (req, res) => {

    //Fetch all appointments, sorted by most recent first
    const data = await Appointment.find().sort({ createdAt : -1 });

    return res.status(200).json(
        new ApiResponse(200, data, "All Appointments")
    )
})

//Update appointments status
export const updateAppointmentStatus =  asyncHandler( async (req, res) => {
    
    //Get Id from the params
    const { id } = req.params;
    const { status } = req.body;

    //Validate the status provided and it should be in one of the Enum values
    const allowedStatuses = [ "Pending", "Confirmed", "Completed", "Cancelled" ];
    if(!allowedStatuses.includes(status)){
        throw new ApiError(401, "Invalid status value");
    }

    //Finding and updating
    const updatedAppointment = await Appointment.findByIdAndUpdate(
        id,
        { $set : { status : status}},
        {new : true, runValidators : true}
    )

    if(!updatedAppointment){
        throw new ApiResponse(404, "Appointment not found");
    }

    return res.status(200).json(
        new ApiResponse(200, updatedAppointment, "Status updated successfully")
    )
})

//Delete Appointment
export const deleteAppointment = asyncHandler( async( req, res) => {

    const { id } = req.params;

    //Perform the delete
    const deletedUser = await Appointment.findByIdAndDelete(id);

    if(!deletedUser){
        throw new ApiError(404, "Appointment not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Appointment deleted successfully")
    )
})