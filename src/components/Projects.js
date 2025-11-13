import React, { forwardRef } from 'react';
import logoImg from '../assets/logo.jpg';

const Projects = forwardRef((props, ref) => (
    <section id="projects" ref={ref}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
            <div className="project-card">
                <img src={logoImg} alt="Project 1" className="project-img" />
                <div className="project-content">
                    <h3 className="project-title">Student Attainment Reporting System</h3>
                    <p className="project-description">A full-stack web application built using Django, SQLite, and JavaScript to manage and automate student academic data. It allows admins to upload, edit, and track student grades with real-time Excel synchronization and secure access control using Django’s built-in authentication system.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sakthi032/college/" className="project-link">
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>
            {/* <div className="project-card">
                <img src="https://picsum.photos/seed/project2/400/200.jpg" alt="Project 2" className="project-img" />
                <div className="project-content">
                    <h3 className="project-title">Task Management App</h3>
                    <p className="project-description">Collaborative task management tool built with Spring Boot and React, featuring real-time updates and team collaboration.</p>
                    <a href="#" className="project-link">
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>
            <div className="project-card">
                <img src="https://picsum.photos/seed/project3/400/200.jpg" alt="Project 3" className="project-img" />
                <div className="project-content">
                    <h3 className="project-title">Weather Dashboard</h3>
                    <p className="project-description">Interactive weather application with location-based forecasts, data visualization, and responsive design.</p>
                    <a href="#" className="project-link">
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>
            <div className="project-card">
                <img src="https://picsum.photos/seed/project4/400/200.jpg" alt="Project 4" className="project-img" />
                <div className="project-content">
                    <h3 className="project-title">Blog Platform</h3>
                    <p className="project-description">Content management system with rich text editor, user roles, and SEO optimization built with Django and React.</p>
                    <a href="#" className="project-link">
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div> */}
        </div>
    </section>
));

export default Projects;
