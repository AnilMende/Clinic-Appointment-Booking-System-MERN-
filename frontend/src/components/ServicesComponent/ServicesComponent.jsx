
import React from "react";
import "./ServicesComponent.css";

const ServicesComponent = () => {

    const services = [
        {
            title: "DRY CUPPING",
            description: "Traditional cupping therapy to detoxify the body and improve blood circulation."
        },
        {
            title: "WET CUPPING",
            description: "Helps reduce chronic pain in muscles, joints, and back."
        },
        {
            title: "FIRE CUPPING",
            description: "Used by athletes to improve recovery and muscle performance."
        },
        {
            title: "FACIAL CUPPING",
            description: "Removes toxins from the body and improves overall health."
        },
        {
            title: "MASSAGE THERAPY",
            description: " Is a form of manual therapy that involves the systematic manipulation of the body's soft tissues."
        },
        {
            title: "DERMA PLANNING",
            description: "It is frequently used to improve skin texture, reduce the appearance of fine lines and acne scars."
        }
    ];
    return (
        <div id="services" className="services">

            <div className="services-container">

                <h2 className="services-title">Our Services</h2>

                <div className="services-grid">
                    {
                        services.map((service, index) => (
                            <div key={index} className="service-card">

                                <h3>{service.title}</h3>

                                <p>{service.description}</p>

                            </div>
                        ))
                    }
                </div>

                <div className="services-info">
                    <img src="/Lady-therapist.png" alt="Lady Therapist" />
                    <p>Ladies Therapist Also Available</p>
                </div>

                <p className="services-bottom">Home Visit Also Available For Ladies and Gents</p>
            </div>
        </div>
    )
}

export default ServicesComponent;