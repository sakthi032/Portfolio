import React, { useEffect, useState, forwardRef } from 'react';
import profileImg from '../assets/Sakthivel.png';

const Home = forwardRef(({ scrollToSection }, ref) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const roles = ["Full Stack Developer 💻", "Frontend Developer 🎨", "Backend Developer ⚙️", "Creative Coder 🚀"];
        let roleIndex = 0, charIndex = 0, isDeleting = false;
        const typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000;

        const typeText = () => {
            const currentRole = roles[roleIndex];
            if (!isDeleting) {
                setDisplayedText(currentRole.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === currentRole.length) { isDeleting = true; setTimeout(typeText, pauseTime); return; }
            } else {
                setDisplayedText(currentRole.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
            }
            setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
        };
        typeText();
    }, []);

    return (
        <section id="home" ref={ref}>
            <div className="home-content">
                <img src={profileImg} alt="Profile" className="profile-img" />
                <div className="typing-text"><span>{displayedText}</span></div>
                <p className="welcome-text">Turning ideas into interactive and scalable web applications.</p>
                <div className="btn-group">
                    <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Hire Me</button>
                    <button onClick={() => scrollToSection('projects')} className="btn btn-secondary">View Projects</button>
                </div>
            </div>
        </section>
    );
});

export default Home;