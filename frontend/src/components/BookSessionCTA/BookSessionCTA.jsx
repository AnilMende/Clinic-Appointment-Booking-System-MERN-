
import React from "react";
import { Link } from "react-router-dom";
import "./BookSessionCTA.css";

const BookSessionCTA = () => {
    return (
        <div id="book-session" className="cta">

            <div className="cta-container">

                <h2>Ready to Experience the Benefits of Hijama Therapy?</h2>

                <p>
                    Book your session today and take the first step toward better helath and natural healing.
                </p>

                <a href="#booking-form" className="cta-btn">Book Your Session</a>
            </div>

        </div>
    )
}

export default BookSessionCTA;