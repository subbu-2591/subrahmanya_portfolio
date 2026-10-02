import React from 'react';
import { Target } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { careerInterests } from '../data/portfolio';

export default function CareerInterests() {
  return (
    <section id="interests" className="section-padding section-divider bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          eyebrow="Career Interests"
          title="Roles I'm actively exploring."
          subtitle="I am open to entry-level opportunities in any of the following areas."
        />

        <div className="flex flex-wrap gap-3">
          {careerInterests.map((interest) => (
            <div
              key={interest}
              className="flex items-center gap-2.5 card px-5 py-3.5 card-hover"
            >
              <Target size={15} className="text-indigo-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium text-sm">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
