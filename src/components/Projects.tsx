import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const tags = ['all', 'react', 'kotlin', 'graphql', 'java'];

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="filters">
        {tags.map(tag => (
          <button
            key={tag}
            className={filter === tag ? 'active' : ''}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;
