import React, { useState, useEffect, forwardRef } from 'react';

const Navbar = forwardRef(({ scrollToSection }, ref) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // This is the key change
    const handleLinkClick = (e, sectionId) => {
        e.preventDefault(); // 1. Prevent the default jump
        scrollToSection(sectionId); // 2. Run our smooth scroll
        setIsMenuOpen(false); // 3. Close mobile menu
    };

    return (
        <nav id="navbar" ref={ref} className={scrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <div className="logo">SAKTHIVEL N</div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>Education</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
                    </li>
                    <li>
                        <a href="#achievements" onClick={(e) => handleLinkClick(e, 'achievements')}>Achievements</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
});

export default Navbar;