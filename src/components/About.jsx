import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Layout, Code2 } from 'lucide-react';

const About = () => {
    const services = [
        {
            icon: <Layout size={24} />,
            title: "Full-Stack Web Development",
            desc: "Engineering end-to-end web applications using modern stacks like MERN and Java Spring Boot for seamless user experiences."
        },
        {
            icon: <Server size={24} />,
            title: "Backend Engineering",
            desc: "Designing robust server-side architectures with Spring Boot and Node.js, focused on performance and security."
        },
        {
            icon: <Code2 size={24} />,
            title: "REST API Design",
            desc: "Developing clean, scalable, and well-documented APIs to power complex frontend interactions and third-party integrations."
        },
        {
            icon: <Database size={24} />,
            title: "Database Architecture",
            desc: "Optimizing data storage and retrieval using PostgreSQL and MongoDB, ensuring data integrity and high-speed access."
        }
    ];

    return (
        <section id="about" className="section" style={{ background: '#ffffff' }}>
            <div className="container">
                
                {/* Intro Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', marginBottom: '6rem', alignItems: 'flex-start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="sub">Expertise</span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                            Engineering <span style={{ color: 'var(--accent-color)' }}>Robust</span> <br /> Digital Products.
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ paddingTop: '2rem' }}
                    >
                        <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8 }}>
                            I bridge the gap between technical complexity and practical usability, focusing on building high-fidelity systems that solve real-world problems.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid (Authentic Skills) */}
                <div id="services-anchor" style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem', color: '#111827' }}>My Specialized Services</h3>
                    <div className="services-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ 
                                    padding: '3rem 2.5rem', 
                                    background: '#ffffff', 
                                    border: '1px solid #f1f5f9',
                                    borderRadius: '1.25rem',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                                    transition: 'all 0.3s ease'
                                }}
                                className="service-card"
                            >
                                <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>{service.icon}</div>
                                <h4 style={{ 
                                    fontSize: '1.4rem', 
                                    fontWeight: 800, 
                                    marginBottom: '1rem', 
                                    color: '#111827',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {service.title}
                                </h4>
                                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .service-card:hover {
                    border-color: var(--accent-color);
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.05);
                }
                @media (max-width: 968px) {
                    div[style*="grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr)"] { grid-template-columns: 1fr !important; gap: 2rem; }
                    .services-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default About;
