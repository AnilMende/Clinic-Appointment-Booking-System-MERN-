
import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import AboutHijama from "../components/AboutHijama/AboutHijama.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";

import ServicesComponent from "../components/ServicesComponent/ServicesComponent.jsx";
import BookSessionCTA from "../components/BookSessionCTA/BookSessionCTA.jsx";

import Testimonials from "../components/Testimonials/Testimonials.jsx";


import BookingForm from "../components/BookingForm/BookingForm.jsx";
import ContactComponent from "../components/ContactComponent/ContactComponent.jsx";

const Home = () => {
    return(
        <div>
            <Hero/>
            <AboutHijama/>
            <Benefits/>
            <ServicesComponent/>
            <BookSessionCTA/>
            <Testimonials/>
            <BookingForm/>
            <ContactComponent/>
        </div>

    )
}

export default Home;