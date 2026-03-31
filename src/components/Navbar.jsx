import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Expertise', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`nav-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="container nav-main-container">
                <div className="nav-island">
                    <a href="#home" className="nav-logo-modern">
                        <span className="logo-indicator"></span>
                        Tamilarasan J
                    </a>

                    {/* Desktop Navigation */}
                    <div className="nav-links-desktop">
                        <ul className="nav-menu">
                            {navLinks.map((link) => (
                                <li 
                                    key={link.name}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    style={{ position: 'relative' }}
                                >
                                    <a href={link.href} className="nav-item">
                                        {link.name}
                                    </a>
                                    {hoveredLink === link.name && (
                                        <motion.div 
                                            layoutId="nav-hover"
                                            className="nav-hover-bg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav-actions">
                        <a href="#contact" className="nav-btn-premium">
                            <span>Say Hello</span>
                            <ArrowUpRight size={16} />
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            className="nav-mobile-btn"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-side-nav"
                    >
                        <div className="mobile-nav-inner">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    className="mobile-nav-link"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsOpen(false)} className="mobile-cta-btn">
                                Start a Conversation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                :root {
                    --max-width: 1200px;
                    --section-padding: 2.5rem 2rem;
                }
                .nav-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: 1.5rem 0;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    pointer-events: none; /* Let clicks pass through to content */
                }

                .nav-main-container {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                .nav-island {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(241, 245, 249, 0.8);
                    padding: 0.6rem 1.75rem;
                    border-radius: 999px;
                    width: calc(100% - 2rem);
                    max-width: 1000px;
                    transition: all 0.4s ease;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
                    pointer-events: auto; /* Re-enable clicks for the island itself */
                    position: relative;
                }

                .is-scrolled .nav-island {
                    max-width: 800px;
                    background: rgba(255, 255, 255, 0.85);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
                    margin-top: 0.5rem;
                }

                .nav-logo-modern {
                    font-size: 1rem;
                    font-weight: 800;
                    color: #111827;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }

                .hero-grid {
                  display: grid;
                  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.6fr);
                  gap: 2rem;
                  align-items: center;
                }

                .responsive-grid {
                  display: grid;
                  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
                  gap: 4rem;
                  align-items: flex-start;
                }

                @media (max-width: 968px) {
                  .hero-grid, .responsive-grid {
                    grid-template-columns: 1fr;
                    text-align: center;
                    gap: 2rem;
                  }
                }

                .logo-indicator {
                    width: 8px;
                    height: 8px;
                    background: var(--accent-color);
                    border-radius: 50%;
                    display: block;
                }

                .nav-menu {
                    display: flex;
                    gap: 0.5rem;
                    list-style: none;
                }

                .nav-item {
                    padding: 0.5rem 1.25rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #475569;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    display: block;
                    position: relative;
                    z-index: 2; /* Keep above hover background */
                }

                .nav-item:hover {
                    color: #111827;
                }

                .nav-hover-bg {
                    position: absolute;
                    inset: 0;
                    background: rgba(16, 185, 129, 0.08);
                    border-radius: 99px;
                    z-index: 1;
                }

                .nav-btn-premium {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.6rem 1.4rem;
                    background: #111827;
                    color: white;
                    border-radius: 99px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    z-index: 2;
                }

                .nav-btn-premium:hover {
                    background: var(--accent-color);
                    transform: scale(1.03);
                    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
                }

                .nav-mobile-btn {
                    display: none;
                    background: transparent;
                    border: none;
                    color: #111827;
                    cursor: pointer;
                    margin-left: 1rem;
                }

                .mobile-side-nav {
                    position: fixed;
                    top: 5rem;
                    left: 0.75rem;
                    right: 0.75rem;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(241, 245, 249, 0.8);
                    border-radius: 2rem;
                    padding: 2rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
                    z-index: 999;
                    pointer-events: auto;
                }

                .mobile-nav-inner {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    align-items: center;
                }

                .mobile-nav-link {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #111827;
                    text-decoration: none;
                    padding: 0.5rem;
                }

                .mobile-cta-btn {
                    margin-top: 1rem;
                    padding: 1rem 2rem;
                    background: var(--accent-color);
                    color: white;
                    border-radius: 99px;
                    font-weight: 700;
                    text-decoration: none;
                }

                @media (max-width: 968px) {
                    .nav-links-desktop { display: none; }
                    .nav-btn-premium { display: none; }
                    .nav-mobile-btn { display: block; }
                    .nav-island { padding: 0.6rem 1.25rem; width: calc(100% - 2.5rem); }
                    .nav-logo-modern { font-size: 0.95rem; }
                }

                @media (max-width: 480px) {
                    .nav-island { width: calc(100% - 2rem); padding: 0.5rem 1rem; }
                    .nav-logo-modern { font-size: 0.9rem; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
