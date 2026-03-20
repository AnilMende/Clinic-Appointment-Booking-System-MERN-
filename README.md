
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

-> Start backend server

-> Start React frontend

-> Open website

-> Fill booking form

-> Click Book Appointment Button

==> Expected result:

-> Appointment stored in MongoDB

-> API returns success message

-> Form resets

-> Implemented Scroll navigation, Sticky navbar, Active section highlighting, Smooth Scrolling, Responsive navbar.

-> Booking Form connected to backend.

-> Added Date Validation to avoid booking on the past dates.

-> Added additional changes to services page like availability of Lady therapist and home visit avialability.

-> Fixed the styling of the pages in way that it will be mobile responsive. Based on the screen sizes.

-> Right now, a user can click Submit multiple times, which can create duplicate bookings in our database. So to prevent double submission added Loading State.

-> Replaced alert() with proper UI Messages using the Toast Notification and the library react-hot-toast.

-> npm install react-hot-toast. toast.success("message") for success messages, toast.error("error") for error messages.

==> Admin Dashboard:

-> npm create vite@latest admin

-> npm install axios react-hot-toast

-> we are building admin dashboard to see all latest bookings, view all appointments, Update appointment status (Pending -> Confirmed -> Completed)

-> And to delete Invalid or Spam bookings.

-> Added Dashboard to display the Name, Phone, Date , and Status of the appointment for the admin.

-> By using this admin will be able to delete the appointment , can change the status of the appointment to Completed or Cancelled or Confirmed.

-> Created a table of appointments to display based on the Date they booked on.

==> Admin Register and Login:

-> To make the admin dashboard only available to admin added register and login.

-> The admin will access the admin dashboard by logging into the dashboard.

-> Created separate admin Model, Controller, and routes, for the register and login.

-> With the help of bcrypt the password is hashed during the register and password entered by the user is compared with the hashed password in the db during login.

-> jsonwebtoken helps in creating a token in both register and login.

-> created a Middleware for the routes like update-appointment, delete-appointment, get all appointments . The generated token shoould be used to verify the admin     and gives access to the next function in the route.
