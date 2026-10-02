import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';

function ProjectCard({ project }) {
  return (
    <article className="card card-hover flex flex-col h-full p-6 group">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-slate-100 leading-snug group-hover:text-indigo-300 transition-colors">
          {project.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2.5">
            Key Features
          </p>
          <ul className="space-y-1.5">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-slate-400"
              >
                <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dataset size badge — shown only if project has a dataset field */}
      {project.dataset && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/50">
            Dataset: {project.dataset}
          </span>
        </div>
      )}

      {/* Tech stack */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700/50 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs px-4 py-2"
        >
          <Github size={13} />
          View GitHub
        </a>

        {/* Only show demo link if it actually exists */}
        {project.demo && project.demo !== null && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-4 py-2"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-divider bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built and tested."
          subtitle="Personal and academic projects demonstrating skills in full-stack development, QA and problem-solving."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
