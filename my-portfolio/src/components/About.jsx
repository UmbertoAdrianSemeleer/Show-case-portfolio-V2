// src/components/About.jsx
import React from 'react';
import './About.css';
import profileImage from '../assets/images/Umberto.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-header">About Me</h2>
            <div className="about-content">
                <img src={profileImage} alt="Profile" className="about-image" />
                <div className="about-text">
                    <p>Hello! I am a UX/UI designer and frontend developer with a passion for creating stunning user experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
