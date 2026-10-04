import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData, experienceData, skillCategories, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10 print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-xl print:hidden"
        />

        {/* Modal Window / Printable Resume Paper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        >
          {/* Header Controls (Hidden on print) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/80 backdrop-blur-md print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-sm font-semibold text-slate-200">Sayed Sepehr Mozafari — Curriculum Vitae</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-left bg-dark-950 text-slate-200 font-sans print:p-8 print:bg-white print:text-black">
            
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-6 print:border-slate-300">
              <h1 className="text-3xl font-extrabold text-white print:text-black">
                {profileData.name}
              </h1>
              <p className="text-base font-semibold text-cyan-400 print:text-slate-800 mt-1">
                {profileData.title}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400 print:text-slate-600 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  github.com/Sayedse
                </span>
                <span className="flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  linkedin.com/in/sayed-sepehr
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 print:border-slate-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed font-light">
                {profileData.aboutContent}
              </p>
            </section>

            {/* Work Experience */}
            <section className="space-y-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 print:border-slate-300 pb-1">
                Professional Experience
              </h2>

              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <div className="font-bold text-white print:text-black">
                        {exp.role} — <span className="text-cyan-300 print:text-slate-700">{exp.company}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-1.5 list-none pl-0">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
                          <span className="text-cyan-400 print:text-slate-500 font-mono mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 print:border-slate-300 pb-1">
                Technical Skills &amp; Testing Tools
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="space-y-1">
                    <span className="font-semibold text-slate-200 print:text-black">
                      {cat.name}:
                    </span>{' '}
                    <span className="text-slate-400 print:text-slate-700 font-mono">
                      {cat.skills.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 print:border-slate-300 pb-1">
                Education
              </h2>

              <div className="text-sm">
                <div className="font-bold text-white print:text-black">
                  {educationData.degree}
                </div>
                <div className="text-xs text-slate-400 print:text-slate-600 font-mono">
                  {educationData.institution}
                </div>
              </div>
            </section>

          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 border-t border-white/10 bg-dark-950 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <span className="text-xs text-slate-500 font-mono">
              Ready for immediate export &amp; submission
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print</span>
              </button>
              <a
                href="/Sayed_Sepehr_Mozafari_Resume.pdf"
                download="Sayed_Sepehr_Mozafari_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold shadow transition-all hover:brightness-110"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
