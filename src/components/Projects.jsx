import React from 'react';
import { motion } from 'framer-motion';
import { Github, CheckCircle2 } from 'lucide-react';

const projects = [
    {
        title: "Spring-Ecommerce Hub",
        sub: "Full-Stack Java Spring Boot Application",
        desc: "A comprehensive e-commerce platform with a robust Java Spring Boot backend and a dynamic frontend. Engineered for smooth shopping experiences with synchronized data flow.",
        github: "https://github.com/Tamilnavy/Spring-ecommercee"
    },
    {
        title: "Modern Expense Tracker",
        sub: "Full-Stack MERN Application",
        desc: "A sleek, interactive application to manage personal finances. Features real-time data visualization and secure transaction tracking.",
        github: "https://github.com/Tamilnavy/expense"
    },
    {
        title: "SafeLine Management",
        sub: "Security & Investigative Platform",
        desc: "An enterprise-grade platform designed for managing case reports and investigative workflows with high reliability and data security.",
        github: "https://github.com/Tamilnavy/safeline"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ background: '#ffffff' }}>
            <div className="container">
                <div id="projects-anchor" style={{ marginBottom: '2.5rem' }}>
                    
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em' }}>Technical Implementations.</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            style={{ 
                                padding: '2.5rem',
                                background: '#fcfcfc',
                                border: '1px solid #f1f5f9',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease'
                            }}
                            className="simple-project-card"
                        >
                            <span style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {project.sub}
                            </span>
                            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                                {project.desc}
                            </p>
                            
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-simple-link">
                                    Source Code <Github size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .simple-project-card:hover {
                    border-color: var(--accent-color);
                    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.05);
                    transform: translateY(-5px);
                }
                .project-simple-link {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    color: #111827;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .project-simple-link:hover {
                    color: var(--accent-color);
                    transform: translateX(5px);
                }
                @media (max-width: 480px) {
                    .simple-project-card { padding: 1.5rem !important; }
                    h3 { font-size: 1.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
