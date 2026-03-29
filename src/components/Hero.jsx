import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container">
                <div className="hero-asymmetric-grid">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                            <div style={{ height: '2px', width: '30px', background: 'var(--accent-color)' }} />
                            <span style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>
                                Full-Stack Software Engineer
                            </span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', color: '#111827', marginBottom: '1rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                            Building Scalable & <br />
                            <span style={{ color: 'var(--accent-color)' }}>High-Performance Web Apps.</span>
                        </h1>

                        <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '580px', marginBottom: '3rem', lineHeight: 1.8 }}>
                            Engineering robust <span style={{ color: '#111827', fontWeight: 700 }}>distributed systems</span> and high-performance web architectures. Specialized in <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Java Spring Boot, Spring Security, and the MERN stack</span> for scalable enterprise solutions.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                            <a href="#projects" className="btn btn-primary">
                                View My Projects <ChevronRight size={18} />
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Get In Touch
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                            <a href="mailto:tamiltamilaa2000@gmail.com" className="social-icon-modern">
                                <Mail size={20} />
                            </a>
                            <a href="https://linkedin.com/in/tamilarasan-j-" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/Tamilnavy" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Section - Now Circular/Rounded */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
                    >
                        <motion.div
                            className="hero-image-circle"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: 'min(400px, 80vw)',
                                height: 'min(400px, 80vw)',
                                borderRadius: '50%',
                                padding: '12px',
                                background: '#ffffff',
                                border: '1px solid #f1f5f9',
                                boxShadow: 'var(--shadow-lg)',
                                zIndex: 2,
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src="/assets/profile_real.jpg"
                                alt="Tamilarasan J"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    objectPosition: 'center 20%'
                                }}
                            />
                        </motion.div>

                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            width: '80%',
                            height: '80%',
                            background: 'var(--accent-glow)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            zIndex: 1
                        }} />
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: '#94a3b8' }}
            >
                <ArrowDown size={24} />
            </motion.div>

            <style>{`
                .hero-asymmetric-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }
                .social-icon-modern {
                    color: #94a3b8;
                    transition: all 0.3s ease;
                }
                .social-icon-modern:hover {
                    color: var(--accent-color);
                    transform: translateY(-3px);
                }
                @media (max-width: 968px) {
                    .hero-asymmetric-grid { 
                        grid-template-columns: 1fr !important; 
                        gap: 3rem; 
                        text-align: center; 
                    }
                    .hero-asymmetric-grid > div { 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                    }
                    h1 br { display: none; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
