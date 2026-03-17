
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
            description: "Removes toxins from the body and improves overall health."
        },
        {
            title: "DERMA PLANNING",
            description: "Removes toxins from the body and improves overall health."
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
            </div>
        </div>
    )
}

export default ServicesComponent;