
import React from "react";
import "./Benefits.css";

const Benefits = () => {

    const benefits = [
        {
            title: "Pain Relief",
            description: "Helps relieve muscle pain, joint pain, and chronic discomfort."
        },
        {
            title: "Detoxification",
            description: "Removes toxins from the body and improves overall health."
        },
        {
            title: "Better Blood Circulation",
            description: "Stimulates blood flow and improves oxygen supply."
        },
        {
            title: "Stress Reduction",
            description: "Promotes relaxation and helps reduce mental stress."
        }
    ];

    return (
        <div id="benefits" className="benefits">

            <div className="benefits-container">

                <h2 className="benefits-title">Benefits of Hijama Therapy</h2>

                <div className="benefits-grid">
                    {
                        benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">

                                <h3>{benefit.title}</h3>

                                <p>{benefit.description}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Benefits;