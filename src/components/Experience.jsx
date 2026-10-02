import React from 'react';
import { Briefcase, Calendar, FileText, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've gained practical exposure."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="card p-7 card-hover">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Briefcase size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {job.role}
                    </h3>
                    <p className="text-indigo-400 font-semibold text-sm mt-0.5">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Period badge */}
                <div className="flex items-center gap-1.5 text-sm text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50 w-fit flex-shrink-0">
                  <Calendar size={13} className="text-indigo-400" />
                  {job.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 mb-6">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Certificate block */}
              {job.certificate && (
                <div className="pt-5 border-t border-slate-700/50">
                  {/* Certificate meta info */}
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={14} className="text-indigo-400 flex-shrink-0" />
                    <p className="text-xs text-slate-400">{job.certificate.meta}</p>
                  </div>

                  {/* View Certificate button */}
                  <a
                    href={job.certificate.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-4 py-2 inline-flex"
                  >
                    <FileText size={13} />
                    {job.certificate.label}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
