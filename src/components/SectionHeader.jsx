import React from 'react';

/**
 * Reusable section header component
 * @param {string} eyebrow - Small uppercase label above the title
 * @param {string} title - Main section heading
 * @param {string} subtitle - Optional subtitle paragraph
 */
export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14">
      <p className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
