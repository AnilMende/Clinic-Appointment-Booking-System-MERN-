
##Backend Setup

-> Initialize Node Project.

-> Install Dependencies.

-> Setup Express Server.

-> Connect MongoDB.

#Appointment APIs:

-> createAppointment : POST /api/appointments -> Save user booking into databse.

-> GetAppointments : GET /api/appointments -> Admin sees all bookings.

-> updateAppointmentStatus : PUT /api/appointments/:id -> Admin can mark status to "Completed", "Cancelled", "Confirmed"

-> deleteAppointment : DELETE /api/appointments/:id  ->  Useful for deleting the completed bookings.

-> GetSingleAppointment : GET /api/appointments/:id -> For Fetching the particular appointment.


##Frontend Setup

-> npm create vite@latest  => for installing the latest version of vite

-> npm intall react-router-dom => this allows navigation between the pages.
