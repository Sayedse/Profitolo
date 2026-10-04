import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profileData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export default function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  const handleDownload = () => {
    // Open resume modal and trigger print/save as PDF
    onOpenResume();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CURRICULUM VITAE"
          title="Verified Professional Resume"
          description="Detailed overview of technical skills, enterprise QA automation track record, and educational foundation."
          badgeColor="cyan"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {profileData.name}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                    {profileData.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Updated October 2026 • Verified Experience
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                <a
                  href="/Sayed_Sepehr_Mozafari_Resume.pdf"
                  download="Sayed_Sepehr_Mozafari_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Quick Resume Summary Checklist */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 bg-dark-950/60 p-3 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>DoorDash QA Automation</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-950/60 p-3 rounded-xl border border-white/5">
                <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Selenium &amp; Playwright</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-950/60 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>C.S. Associate Degree</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
