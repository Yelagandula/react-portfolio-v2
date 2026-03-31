import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Vineeth Yelagandula</h1>
        <h2>Full Stack Software Engineer</h2>
        <p>GraphQL Platform · Distributed Systems · AWS</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
