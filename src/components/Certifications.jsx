import React from 'react';
import { Award, Calendar, ExternalLink, BadgeCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { certifications } from '../data/portfolio';

// Map issuer names to a short accent label for the badge
const issuerColor = {
  'KodNest': 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300',
  'OneRoadmap': 'bg-violet-500/10 border-violet-500/20 text-violet-300',
  'Deloitte Australia': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  'Oracle Cloud Infrastructure': 'bg-orange-500/10 border-orange-500/20 text-orange-300',
  'Tata': 'bg-blue-500/10 border-blue-500/20 text-blue-300',
};

function CertCard({ cert }) {
  const accentClass =
    issuerColor[cert.issuer] ||
    'bg-indigo-500/10 border-indigo-500/20 text-indigo-300';

  return (
    <article className="card card-hover flex flex-col h-full p-5 group">
      {/* Top: icon + issuer badge */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-600/15 flex items-center justify-center flex-shrink-0">
          <Award size={18} className="text-indigo-400" />
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-lg border flex-shrink-0 ${accentClass}`}
        >
          {cert.issuer}
        </span>
      </div>

      {/* Cert name */}
      <h3 className="text-sm font-bold text-slate-100 leading-snug mb-3 group-hover:text-indigo-300 transition-colors flex-1">
        {cert.name}
      </h3>

      {/* Meta: date + type */}
      <div className="flex flex-wrap gap-2 mb-4">
        {cert.date && (
          <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/50">
            <Calendar size={11} className="text-indigo-400" />
            {cert.date}
          </span>
        )}
        {cert.type && (
          <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/50">
            <BadgeCheck size={11} className="text-indigo-400" />
            {cert.type}
          </span>
        )}
      </div>

      {/* View / Verify button */}
      <div className="pt-4 border-t border-slate-700/50 mt-auto">
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs px-4 py-2 inline-flex"
        >
          <ExternalLink size={13} />
          {cert.linkLabel}
        </a>
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeader
          eyebrow="Certifications"
          title="Courses and virtual simulations completed."
          subtitle="Professional certifications and job simulations demonstrating practical industry exposure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
