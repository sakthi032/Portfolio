import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => (
    <section id="about" ref={ref}>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
            <p className="about-text">
                I'm a passionate Full Stack Developer who enjoys building responsive and user-friendly web applications.
                I love learning new tools, exploring creative ideas, and writing clean, efficient code. My goal is to
                grow as a developer and contribute to meaningful tech solutions. With expertise in both frontend and
                backend technologies, I strive to create seamless digital experiences that combine aesthetic appeal with
                robust functionality.
            </p>
        </div>
    </section>
));

export default About;