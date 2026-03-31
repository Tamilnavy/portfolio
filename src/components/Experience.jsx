import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const expData = [
    {
        type: "work",
        year: "2023",
        title: "Python Developer Intern",
        company: "Mainflow Technologies",
        desc: "Built modular Python tools and focused on robust logic development and debugging."
    },
    {
        type: "edu",
        year: "2022 - 2026",
        title: "B.E – Computer Science Engineering",
        company: "Adhiyamaan College of Engineering",
        desc: "Final year student focused on Full-Stack, AI, and Network Security."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
            <div className="container">
                <div className="section-header">
                    <span className="sub">Education & Journey</span>
                    <h2 style={{ letterSpacing: '-0.04em' }}>Professional <span style={{ color: 'var(--accent-color)' }}>Journey.</span></h2>
                </div>

                <div style={{ position: 'relative', marginTop: '6rem' }}>
                    {/* Vertical Line */}
                    <div style={{ 
                        position: 'absolute', 
                        left: '0', 
                        top: '0', 
                        bottom: '0', 
                        width: '1px', 
                        background: '#e2e8f0' 
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {expData.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                className="journey-item"
                                initial={{ opacity: 0, x: -25 }}
                            >
                                {/* Marker */}
                                <div className="journey-marker" style={{ 
                                    position: 'absolute', 
                                    left: '-5px', 
                                    top: '0', 
                                    width: '10px', 
                                    height: '10px', 
                                    borderRadius: '50%', 
                                    background: idx === 0 ? 'var(--accent-color)' : '#ffffff',
                                    border: `2px solid ${idx === 0 ? 'var(--accent-color)' : '#cbd5e1'}`,
                                    zIndex: 2,
                                    boxShadow: idx === 0 ? '0 0 15px var(--accent-glow)' : 'none'
                                }} />
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        {exp.type === 'work' ? <Briefcase size={14} color="#94a3b8" /> : <GraduationCap size={14} color="#94a3b8" />}
                                        <span style={{ 
                                            fontSize: '0.85rem', 
                                            fontWeight: 800, 
                                            color: 'var(--accent-color)', 
                                            textTransform: 'uppercase', 
                                            letterSpacing: '0.15em' 
                                        }}>
                                            {exp.year}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>
                                        {exp.title}
                                    </h3>
                                    <p style={{ fontWeight: 700, color: '#64748b', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                                        {exp.company}
                                    </p>
                                    <p style={{ color: '#475569', maxWidth: '650px', lineHeight: 1.8 }}>
                                        {exp.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .journey-item {
                    position: relative;
                    padding-left: 4rem;
                }
                @media (max-width: 968px) {
                    .journey-item { padding-left: 2.5rem; }
                    .journey-marker { left: -5px; }
                }
                @media (max-width: 480px) {
                    .journey-item { padding-left: 2rem; }
                }
            `}</style>
        </section>
    );
};

export default Experience;
