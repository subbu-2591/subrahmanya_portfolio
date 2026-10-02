import React from 'react';
import { Download } from 'lucide-react';
import { personal } from '../data/portfolio';

/**
 * Resume download button.
 *
 * HOW TO UPDATE YOUR RESUME:
 *  1. Save your latest resume PDF as:  public/resume.pdf
 *  2. Open src/data/portfolio.js
 *  3. Set  resumeAvailable: true
 *  4. The button activates everywhere automatically.
 *
 * To update to a new resume later:
 *  - Just replace public/resume.pdf with the new file (same name).
 *  - No code changes needed.
 *
 * Props:
 *  variant — "primary" (default) | "secondary"
 *  className — optional extra classes
 */
export default function ResumeButton({ variant = 'primary', className = '' }) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  if (!personal.resumeAvailable) {
    return (
      <span
        className={`${base} opacity-50 cursor-default select-none ${className}`}
        title="Resume coming soon — add public/resume.pdf and set resumeAvailable: true in portfolio.js"
      >
        <Download size={16} />
        Resume (coming soon)
      </span>
    );
  }

  return (
    <a
      href={personal.resumePath}
      download
      className={`${base} ${className}`}
    >
      <Download size={16} />
      Download Resume
    </a>
  );
}
