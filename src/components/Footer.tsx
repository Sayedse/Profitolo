import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-dark-950 border-t border-white/5 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="text-center sm:text-left space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              {profileData.name}
            </div>
            <p className="font-mono text-cyan-400 text-xs">
              {profileData.title}
            </p>
          </div>

          {/* Social Links & Direct Mail */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-lg bg-dark-900 border border-white/5 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Email Sayed Sepehr Mozafari"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/5 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/5 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-white/5 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors ml-2"
              title="Scroll to top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-2">
          <div>
            © {new Date().getFullYear()} Sayed Sepehr Mozafari. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript, Three.js &amp; Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
