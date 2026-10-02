import React from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { personal, about } from '../data/portfolio';

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BCA Graduate, 2025',
  },
  {
    icon: Briefcase,
    label: 'Status',
    value: 'Full Stack Dev · KodNest (Aug 2025 – Apr 2026)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeader
          eyebrow="About Me"
          title="A fresher ready to learn and contribute."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>

          {/* Quick info cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="card flex items-center gap-4 px-5 py-4 card-hover"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600/15 flex items-center justify-center">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-slate-200 font-semibold text-sm mt-0.5">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
