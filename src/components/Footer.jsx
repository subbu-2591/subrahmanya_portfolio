import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';
import { personal, navLinks } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  const linkedinSet = personal.linkedin !== 'YOUR_LINKEDIN_URL';

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              SG
            </div>
            <span className="font-bold text-slate-300 text-sm">
              Subrahmanya Gouda
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>

            {linkedinSet ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            ) : (
              // TODO: LinkedIn placeholder — update in src/data/portfolio.js
              <span className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-700 cursor-default" title="Add LinkedIn URL">
                <Linkedin size={14} />
              </span>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center">
          <p className="text-xs text-slate-600">
            © {year} Subrahmanya Gouda. Built with React + Vite + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
