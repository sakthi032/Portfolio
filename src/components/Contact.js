import React, { useState, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
    };

    return (
        <section id="contact" ref={ref}>
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <div className="social-icons">
                    <a href="https://wa.me/918681015355" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/childlike_mind_" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sakthivel-n-dev/" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/sakthi032/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:sakthi007032@gmail.com" className="social-icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                {submitted && <p style={{color: 'var(--primary-color)'}}>Thank you for your message! I'll get back to you soon.</p>}
                <form action="https://formspree.io/f/mwpwgqnw" className="contact-form" onSubmit={handleSubmit} method="post">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
});

export default Contact;