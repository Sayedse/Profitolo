import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code, Smartphone, CheckSquare, Layers, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profileData } from '../data/portfolioData';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Software Engineering",
      desc: "Architecting clean, type-safe frontend and mobile architectures with modern TypeScript and component modularity.",
      color: "border-cyan-500/20 group-hover:border-cyan-500/50"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "QA Automation",
      desc: "Developing robust automation frameworks with Selenium, Playwright, REST Assured, and Page Object Model for regression stability.",
      color: "border-emerald-500/20 group-hover:border-emerald-500/50"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
      title: "Mobile Product Delivery",
      desc: "Creating polished mobile apps (like Monevo AI) combining React Native, Expo, and cloud backends.",
      color: "border-blue-500/20 group-hover:border-blue-500/50"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT ME"
          title="Engineering Reliability &amp; Experience"
          badgeColor="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Statement Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl relative border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-emerald-400" />
              
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-4">
                <Cpu className="w-4 h-4" />
                <span>PROFESSIONAL MISSION STATEMENT</span>
              </div>

              {/* Exact content required by prompt */}
              <blockquote className="text-lg sm:text-xl font-normal text-slate-200 leading-relaxed italic">
                “{profileData.aboutContent}”
              </blockquote>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                  Full Defect Lifecycle Ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Scalable Component Systems
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Pillars Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`group glass-card p-5 rounded-xl border ${pillar.color} transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
