import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ResumeButton from './ResumeButton';
import { personal } from '../data/portfolio';

const contactItems = [
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    link: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/subbu-2591',
    link: personal.github,
  },
  {
    icon: Mail,
    label: 'Email',
    // TODO: Replace with your actual email in src/data/portfolio.js
    value: personal.email,
    link: `mailto:${personal.email}`,
  },
];

export default function Contact() {
  const linkedinSet = personal.linkedin !== 'YOUR_LINKEDIN_URL';

  return (
    <section id="contact" className="section-padding section-divider">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Contact"
            title="Let's connect."
            subtitle="I am actively looking for entry-level opportunities. Feel free to reach out through any of the channels below."
          />

          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactItems.map(({ icon: Icon, label, value, link }) => (
              <div key={label} className="card px-5 py-4 card-hover">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      {label}
                    </p>
                    {link ? (
                      <a
                        href={link}
                        target={link.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm text-slate-200 font-medium hover:text-indigo-300 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* LinkedIn card */}
            <div className="card px-5 py-4 card-hover">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/15 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    LinkedIn
                  </p>
                  {linkedinSet ? (
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-200 font-medium hover:text-indigo-300 transition-colors"
                    >
                      View Profile
                    </a>
                  ) : (
                    // TODO: Replace YOUR_LINKEDIN_URL in src/data/portfolio.js
                    <p className="text-sm text-slate-500 italic">
                      Add in portfolio.js
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Resume — controlled by resumeAvailable in portfolio.js */}
            <ResumeButton variant="primary" />

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} />
              View GitHub
            </a>

            {linkedinSet ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            ) : (
              <span
                title="Update LinkedIn URL in src/data/portfolio.js"
                className="btn-secondary opacity-40 cursor-default select-none"
              >
                <Linkedin size={16} />
                LinkedIn
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
