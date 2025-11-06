import React, { forwardRef } from 'react';

const Achievements = forwardRef((props, ref) => (
    <section id="achievements" ref={ref}>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-container">
            <div className="achievement-card">
                <div className="achievement-icon">
                    <i className="fas fa-trophy"></i>
                </div>
                <h3 className="achievement-title">Coding Competition Winner</h3>
                <p className="achievement-description">Recognized for accuracy and speed in solving complex coding challenges during inter-college events.</p>
            </div>
            <div className="achievement-card">
                <div className="achievement-icon">
                    <i className="fas fa-certificate"></i>
                </div>
                <h3 className="achievement-title">Full Stack Certification</h3>
                <p className="achievement-description">Completed advanced full stack development certification program</p>
            </div>
            <div className="achievement-card">
                <div className="achievement-icon">
                    <i className="fas fa-rocket"></i>
                </div>
                <h3 className="achievement-title">Performance Optimizer</h3>
                <p className="achievement-description">Reduced application load time by 60% through optimization</p>
            </div>
        </div>
    </section>
));

export default Achievements;