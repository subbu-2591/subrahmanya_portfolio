import React, { useState } from 'react';
import { Github, Linkedin, MapPin, ArrowDown, Mail } from 'lucide-react';
import { personal } from '../data/portfolio';
import ResumeButton from './ResumeButton';

export default function Hero() {
  const linkedinSet = personal.linkedin !== 'YOUR_LINKEDIN_URL';
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/8 blur-[140px]" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="section-container w-full pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-slate-400 mb-7">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to entry-level IT opportunities
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-100 leading-[1.1] mb-5">
              Hi, I'm{' '}
              <span className="text-indigo-400">
                Subrahmanya<br className="hidden sm:block" /> Gouda
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-indigo-300 font-semibold mb-5">
              {personal.headline}
            </p>

            <p className="text-base text-slate-400 leading-relaxed max-w-xl mb-8">
              {personal.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <ResumeButton variant="primary" />

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                GitHub
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
                <span className="btn-secondary opacity-50 cursor-default select-none">
                  <Linkedin size={16} />
                  LinkedIn
                </span>
              )}
            </div>

            {/* Quick contact info */}
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-indigo-400 flex-shrink-0" />
                {personal.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={13} className="text-indigo-400 flex-shrink-0" />
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-slate-300 transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Profile photo ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-indigo-600/10 to-transparent blur-sm" />

              {/* Photo frame */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-indigo-950/40">
                {!imgError ? (
                  <img
                    src={personal.profilePhoto}
                    alt="Subrahmanya Gouda — BCA Graduate"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback avatar if image file is missing */
                  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-black text-white">
                      SG
                    </div>
                    <p className="text-xs text-slate-500 px-4 text-center">
                      Add profile.jpg to public/ folder
                    </p>
                  </div>
                )}

                {/* Subtle gradient overlay at bottom for text legibility */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>

              {/* Floating badge — available for work */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-slate-900 border border-slate-700/60 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-300 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for work
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-600 animate-bounce hidden md:flex">
        <span className="text-xs">Scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
