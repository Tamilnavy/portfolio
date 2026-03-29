import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="section-header">
                    <span className="sub">Get In Touch</span>
                    <h2>Let's <span className="gradient-text">Connect</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', maxWidth: '1000px', margin: '0 auto' }}>
                    
                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Information</h3>
                        
                        {[
                            { icon: <Mail size={20} />, label: "Email", value: "tamiltamilaa2000@gmail.com", link: "mailto:tamiltamilaa2000@gmail.com" },
                            { icon: <Phone size={20} />, label: "Phone", value: "+91 7824926944", link: "tel:+917824926944" },
                            { icon: <MapPin size={20} />, label: "Location", value: "Hosur, Tamil Nadu, India", link: "#" }
                        ].map((item, idx) => (
                            <a 
                                key={idx} 
                                href={item.link} 
                                className="glass-panel" 
                                style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', transition: 'transform 0.2s' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <div style={{ color: 'var(--accent-color)', background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>{item.label}</div>
                                    <div style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{item.value}</div>
                                </div>
                            </a>
                        ))}

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {[
                                { icon: <Mail size={20} />, link: "mailto:tamiltamilaa2000@gmail.com" },
                                { icon: <Github size={20} />, link: "https://github.com/Tamilnavy" },
                                { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/tamilarasan-j-" }
                            ].map((soc, i) => (
                                <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '12px' }}>
                                    {soc.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Message / CTA */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel" 
                        style={{ padding: '2.5rem', position: 'relative' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm currently looking for new opportunities. My inbox is always open!
                        </p>
                        
                        <a href="mailto:tamiltamilaa2000@gmail.com" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                            Say Hello <Send size={18} />
                        </a>
                        
                        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            Typically responds within 24 hours
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Footer */}
            <footer style={{ marginTop: '8rem', borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1.5px' }}>
                        TAMIL<span className="gradient-text">.</span>
                    </div>
                    
                    <ul style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Home', 'About', 'Experience', 'Projects', 'Contact'].map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{link}</a>
                            </li>
                        ))}
                    </ul>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Tamilarasan J. Designed & Built with passion.
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;

