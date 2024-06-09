// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

// Import the images
import project1 from '../assets/images/project1.svg';
import project2 from '../assets/images/project2.svg';
import project3 from '../assets/images/project3.svg';
import project4 from '../assets/images/project4.svg';
import project5 from '../assets/images/project5.svg';
import project6 from '../assets/images/project6.svg';
import project7 from '../assets/images/project7.svg';
import project8 from '../assets/images/project8.svg';
import project9 from '../assets/images/project9.svg';

const projects = [
    {
        id: 1,
        image: project1,
        title: 'The Future Company',
        description: 'A white label development platform for VoIP services.',
        type: 'Media design internship'
    },
    {
        id: 2,
        image: project2,
        title: 'Loyalties of Lucifer',
        description: 'A loyalty program for Lucifer coffee roasters',
        type: 'Media design full stack dev'
    },
    {
        id: 3,
        image: project3,
        title: 'Microlokaal',
        description: 'Educational multiplayer game to teach kids about gut bacteria and probiotics.',
        type: 'Game design industry project'
    },
    {
        id: 4,
        image: project4,
        title: 'The Beach',
        description: 'You play as Officer Dickson and are tasked with containing a zombie outbreak',
        type: 'Game design 2D'
    },
    {
        id: 5,
        image: project5,
        title: 'The Sun Killer',
        description: 'Play as Pluto and battle the Sun for revenge.',
        type: 'Game design 3D'
    },
    {
        id: 6,
        image: project6,
        title: 'MDMA Jenga',
        description: 'The game serves as a conversation starter to highlight the risks and unpredictable nature of MDMA use.',
        type: 'Minor project'
    },
    {
        id: 7,
        image: project7,
        title: 'Mini House',
        description: 'Minimalism and sustainable housing.',
        type: 'Personal project/real estate'
    },
    {
        id: 8,
        image: project8,
        title: 'DinoHoops',
        description: 'Entertainment/educational toy for young kids aged 5 and 6.',
        type: 'Minor project'
    },
    {
        id: 9,
        image: project9,
        title: 'Simple Chef',
        description: 'Cooking recipes that are dyslexia friendly.',
        type: 'Personal project'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-header">Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <span className="project-type">{project.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
