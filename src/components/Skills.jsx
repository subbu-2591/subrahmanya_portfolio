import React from 'react';
import {
  Code,
  Layers,
  Database,
  CheckSquare,
  Wrench,
  Monitor,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';

// Map icon string keys to Lucide components
const iconMap = {
  code: Code,
  layers: Layers,
  database: Database,
  checkSquare: CheckSquare,
  tool: Wrench,
  monitor: Monitor,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-divider bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Tools and technologies I work with."
          subtitle="A broad foundation across software development, QA, databases and IT support."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ category, icon, items }) => {
            const Icon = iconMap[icon] || Code;
            return (
              <div key={category} className="card card-hover p-6">
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-slate-100 text-sm">{category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
