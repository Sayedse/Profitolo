import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Terminal } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Cyber Timeline Line */}
      <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-500 to-slate-800" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-12 sm:pl-20 group"
          >
            {/* Timeline Node Bead */}
            <div className="absolute left-2.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400'}`} />
            </div>

            {/* Experience Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
              {/* Header: Company, Role & Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-white">
                      {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-dark-950/60 px-3 py-1.5 rounded-xl border border-white/5 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Key Contributions &amp; Impact:
                </div>
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Core Technologies Badges */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 mr-1 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" /> Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-dark-950/80 border border-white/5 text-[11px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
