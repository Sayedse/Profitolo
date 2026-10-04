import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          badgeColor="purple"
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden text-center group hover:border-purple-500/40 transition-all duration-300"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {educationData.degree}
            </h3>

            <p className="text-base font-medium text-purple-300 mb-6">
              {educationData.institution}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Focus: Algorithms, Data Structures &amp; Systems</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
