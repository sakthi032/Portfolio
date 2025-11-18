import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => (
    <section id="skills" ref={ref}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
            <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>HTML/CSS</span>
                        <span>90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>JavaScript</span>
                        <span>85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '85%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>React.js</span>
                        <span>65%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '65%' }}></div>
                    </div>
                </div>
            </div>
            <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Python</span>
                        <span>90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Django</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '80%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Java</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '75%' }}></div>
                    </div>
                </div>
                // <div className="skill-item">
                //     <div className="skill-name">
                //         <span>Spring Boot</span>
                //         <span>40%</span>
                //     </div>
                //     <div className="skill-bar">
                //         <div className="skill-progress" style={{ '--skill-level': '40%' }}></div>
                //     </div>
                // </div>
            </div>
            <div className="skill-category">
                <h3>Database</h3>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Oracle SQL</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '75%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>MySQL</span>
                        <span>70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '70%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>SQLite</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ '--skill-level': '80%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

export default Skills;
