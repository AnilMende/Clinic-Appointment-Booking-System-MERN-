
import React from "react";

import "./Testimonials.css";

const Testimonials = () => {

    const testimonials = [
        {
            name: "Ahmed",
            review: "The Hijama therapy session was very professional and helped relieve my back pain."
        },
        {
            name: "Rajesh",
            review: "Very clean and hygienic environment. I felt relaxed after the therapy."
        },
        {
            name: "Imran",
            review: "Highly recommended for anyone looking for natural healing therapy."
        }
    ];


    return (
        <div className="testimonials">

            <div className="testimonials-container">

                <h2 className="testimonials-title">What Our Clients Say</h2>

                <div className="testimonials-grid">
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">

                                <p className="testomonial-text">
                                    "{testimonial.review}"
                                </p>

                                <h4 className="testimonial-name">
                                    - {testimonial.name}
                                </h4>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Testimonials;