
import React from "react";
import "./ContactComponent.css";
import PhoneIcon from '@mui/icons-material/Phone';
import { Mail, Instagram, LocationOn } from '@mui/icons-material';

const ContactComponent = () => {
    return(
        <div id="contact" className="contact">

            <div className="contact-container">

                <h2 className="contact-title">Contact Us</h2>

                <div className="contact-grid">

                    <div className="contact-card">
                        <p className="icon"><PhoneIcon/></p>
                        <h3>Phone</h3>
                        <p>+91 6281793365</p>
                        <p>+91 8639655081</p>
                    </div>

                    <div className="contact-card">
                        <p className="icon"><Mail/></p>
                        <h3>Email</h3>
                        <p>akhealthcareandwellnesscentre@gmail.com</p>
                    </div>

                    <div className="contact-card">
                        <p className="icon"><Instagram/></p>
                        <h3>Instagram</h3>
                        <p>@A.K_HEALTHCARE_CENTRE</p>
                    </div>

                    <div className="contact-card">
                        <p className="icon"><LocationOn/></p>
                        <h3>Location</h3>
                        <p>Near Masjid e Assalam, ITI Colony,Hyderabad, Telangana</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactComponent;