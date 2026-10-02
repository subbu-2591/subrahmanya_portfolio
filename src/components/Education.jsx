import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeader
          eyebrow="Education"
          title="Academic background."
        />

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={edu.degree} className="card card-hover p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap size={17} className="text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-100 text-base leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Year + Score */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0 pl-14 sm:pl-0">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
                    <Calendar size={12} className="text-indigo-400" />
                    {edu.year}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-semibold bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
                    <Award size={12} />
                    {edu.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
