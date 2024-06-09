// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
