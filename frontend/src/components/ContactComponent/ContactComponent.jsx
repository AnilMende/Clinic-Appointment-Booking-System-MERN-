
import React from "react";
import "./ContactComponent.css";
import PhoneIcon from '@mui/icons-material/Phone';
import { Mail, Instagram, LocationOn } from '@mui/icons-material';

const ContactComponent = () => {
    return (
        <div id="contact" className="contact">

            <div className="contact-container">

                <h2 className="contact-title">Contact Us</h2>

                <div className="contact-grid">

                    {/* Phone Card links to the primary number */}
                    <a href="tel:+916281793365" className="contact-card">
                        <p className="icon"><PhoneIcon /></p>
                        <h3>Phone</h3>
                        <p>+91 6281793365</p>
                        <p>+91 8639655081</p>
                    </a>

                    {/* Email Card open by default mail app */}
                    <a href="mailto:akhealthcareandwellnesscentre@gmail.com" className="contact-card">
                        <p className="icon"><Mail /></p>
                        <h3>Email</h3>
                        <p>akhealthcareandwellnesscentre@gmail.com</p>
                    </a>

                    {/* Instagram Card Opens instagram profile */}
                    <a href="https://www.instagram.com/A.K_HEALTHCARE_CENTRE/"
                        target="_blank"
                        rel="noreferrer" className="contact-card"

                        onClick={(e) => {
                            const username = "A.K_HEALTHCARE_CENTRE";

                            // Detect mobile device
                            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                            if (isMobile) {
                                e.preventDefault();

                                const appUrl = `instagram://user?username=${username}`;
                                const webUrl = `https://www.instagram.com/${username}/`;

                                // Opening instagram app
                                window.location.href = appUrl;

                                // Fallback to browser if app doesn't open
                                setTimeout(() => {
                                    window.location.href = webUrl;
                                }, 1500);
                            }
                        }}
                    >
                        <p className="icon"><Instagram /></p>
                        <h3>Instagram</h3>
                        <p>@A.K_HEALTHCARE_CENTRE</p>
                    </a>

                    {/* Location Card opens Google maps */}

                    <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <p className="icon"><LocationOn /></p>
                        <h3>Location</h3>
                        <p>Near Masjid e Assalam, ITI Colony, Hyderabad, Telangana</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;