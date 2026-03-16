
import React from "react";
import "./Contact.css";

const Contact = () => {
    return(
        <div id="contact" className="contact">

            <div className="contact-container">

                <h2 className="contact-title">Contact Us</h2>

                <div className="contact-grid">

                    <div className="contact-card">
                        <h3>Phone</h3>
                        <p>+91 6281793365, +91 8639655081</p>
                    </div>

                    <div className="contact-card">
                        <h3>Eail</h3>
                        <p>akhealthcareandwellnesscentre@gmail.com</p>
                    </div>

                    <div className="contact-card">
                        <h3>Instagram</h3>
                        <p>@A.K_HEALTHCARE_CENTRE</p>
                    </div>

                    <div className="contact-card">
                        <h3>Location</h3>
                        <p>Near Masjid e Assalam, ITI Colony,Hyderabad, Telangana</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;