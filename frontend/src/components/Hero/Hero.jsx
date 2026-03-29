import React from "react";

import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div id="home" className="hero">

            <div className="hero-container">

                {/* Text on Right Side */}
                <div className="hero-text">
                    <h1>
                        Professional Hijama Therapy
                    </h1>

                    <p>
                        Experience the healing benefits of traditional Hijama therapy.
                        Improve blood circulation, remove toxins, and restore balance
                        in your body with expert care.
                    </p>

                    <div className="hero-quote">
                        <p>
                            Hijama The Only Therapy Which Treats MIND BODY SOUL
                        </p>
                    </div>

                    {/* Trust Indicators */}

                    <div className="hero-trust">

                        <span>✔ Safe & Hygienic Procedure</span>
                        <span>✔ Experienced Practitioner</span>
                        <span>✔ Trusted Therapy</span>

                    </div>

                    {/* Adding Book-Session Button */}
                    <a href="#booking-form" className="hero-btn">
                        Book Your Session
                    </a>
                </div>

                {/* Image on Left Side */}
                <div className="hero-image">
                    <img src="/hijama-therapy.png" alt="Hijama Therapy" />
                </div>

            </div>

        </div>
    )
}

export default Hero;