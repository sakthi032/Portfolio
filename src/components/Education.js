import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => (
    <section id="education" ref={ref}>
        <h2 className="section-title">Education</h2>
        <div className="education-container">
            <div className="education-card">
                <h3 className="education-title">Bachelor of Science in Computer Science</h3>
                <p className="education-subtitle">Syed Hameedha Arts & Science College</p>
                <p className="education-date">2022 - 2025</p>
            </div>
            <div className="education-card">
                <h3 className="education-title">Higher Secondary</h3>
                <p className="education-subtitle">Hameedha Boys Higher Secondary School</p>
                <p className="education-date">Completed 2022</p>
            </div>
        </div>
    </section>
));

export default Education;