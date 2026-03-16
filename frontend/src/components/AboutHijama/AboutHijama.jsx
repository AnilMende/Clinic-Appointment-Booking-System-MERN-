
import React from "react";
import "./AboutHijama.css";

const AboutHijama = () => {
    return (
        <div id="about" className="about">

            <div className="about-container">

                {/* Image section */}
                <div className="about-image">
                    <img src="/hijama-about.png" alt="hijama-therapy" />
                </div>

                {/* Text Section */}
                <div className="about-text">
                    <h2>About Hijama Therapy</h2>

                    <p>Hijama, also known as cupping therapy, is a traditional healing
                        method that has been practiced for centuries. It helps remove
                        toxins from the body, improve blood circulation, and promote
                        overall well-being
                    </p>

                    <p>
                        Hijama (wet cupping) therapy is used to relieve chronic pain, reduce inflammation, detoxify the body, and improve blood circulation. People commonly seek this traditional treatment to manage conditions like arthritis, migraines, muscular pain, skin problems, and high blood pressure, while promoting overall wellness.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default AboutHijama;