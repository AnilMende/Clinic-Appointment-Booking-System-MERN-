
import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import AboutHijama from "../components/AboutHijama/AboutHijama.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";
import Services from "../components/Services/Services.jsx";
import BookSessionCTA from "../components/BookSessionCTA/BookSessionCTA.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Contact from "../components/Contact/Contact.jsx";
import BookingForm from "../components/BookingForm/BookingForm.jsx";

const Home = () => {
    return(
        <div>
            <Hero/>
            <AboutHijama/>
            <Benefits/>
            <Services/>
            <BookSessionCTA/>
            <Testimonials/>
            <BookingForm/>
            <Contact/>
        </div>
    )
}

export default Home;