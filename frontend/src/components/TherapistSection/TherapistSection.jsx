import { useState } from "react";
import "./TherapistSection.css";

const TherapistSection = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="therapist-section">

            <div className="therapist-container">

                <div className="therapist-image">
                    <img src="/therapist-image.jpeg" alt="Therapist" />
                </div>

                <div className="therapist-content">

                    <h2>Ashraf Ahmed</h2>

                    <p className="bio">
                        Certified Hijama therapist with expertise in traditional cupping
                        techniques. Focused on providing safe, effective, and personalized
                        treatments for overall wellness.
                    </p>

                    {/* Highlights */}
                    <div className="therapist-highlights">
                        <p>✔ Advance Diploma in Cupping Therapy</p>
                        <p>✔ Certified Cupping Therapy Practitioner</p>
                        <p>✔ 2+ Years of Experience</p>
                        <p>✔ 350+ Happy Patients</p>
                    </div>

                    {/* Cerificates Preview */}
                    <div className="therapist-certificates">
                        <img 
                        src="/Certificate-1.jpeg" 
                        alt="Certificate1"
                         />
                        <img 
                        src="/Certificate-2.jpeg" 
                        alt="Certificate2"
                         />
                    </div>


                    {/* Book Button */}
                    <button className="book-btn"
                        onClick={() => document.getElementById("booking-form").scrollIntoView({
                            behavior: "smooth"
                        })}
                    >
                        Book Appointment
                    </button>
                </div>
            </div>

            
        </div>
    )
}

export default TherapistSection;