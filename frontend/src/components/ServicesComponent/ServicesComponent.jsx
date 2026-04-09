
import React from "react";
import "./ServicesComponent.css";

const ServicesComponent = () => {

    const services = [
        {
            title: "DRY CUPPING",
            description: "Traditional cupping therapy to detoxify the body and improve blood circulation.",
            image : "/images/dry-cupping.png"
        },
        {
            title: "WET CUPPING",
            description: "Helps reduce chronic pain in muscles, joints, and back.",
            image : "/images/Wet-Cupping.jpg"
        },
        {
            title: "FIRE CUPPING",
            description: "Used by athletes to improve recovery and muscle performance.",
            image : "/images/Fire-Cupping.jpg"
        },
        {
            title: "FACIAL CUPPING",
            description: "Removes toxins from the body and improves overall health.",
            image : "/images/Face-Cupping.png"
        },
        {
            title: "MASSAGE THERAPY",
            description: " Is a form of manual therapy that involves the systematic manipulation of the body's soft tissues.",
            image : "/images/Massge-Therapy.png"
        },
        {
            title: "DERMA PLANNING",
            description: "It is frequently used to improve skin texture, reduce the appearance of fine lines and acne scars.",
            image : "/images/Derma-Planning.png"
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
                                
                                <img src={service.image} alt="images" />

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