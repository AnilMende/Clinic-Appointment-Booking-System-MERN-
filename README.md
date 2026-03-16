
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

-> Built Various Components like Navbar, Hero, AboutHijama, Benefits, Our Services, Book-Session CTA, Contact.
-> By this we can see the entire frontend. With help of Book-Session Page we can book a new appointment by connecting it with the API from the backend.

-> onChange event is to change the values of the form data, onSubmit is to submit the form. After successfull submission the appointment data will get stored in the database.
