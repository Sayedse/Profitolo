import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, CheckCircle2, ChevronRight, Sparkles, Send } from 'lucide-react';
import ThreeDWorkspace from './ThreeDWorkspace';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-16 lg:pt-32 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide uppercase">
                Available for New Projects &amp; Roles
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Sayed Sepehr <br />
                <span className="text-gradient-cyan">Mozafari</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-mono">/&gt;</span>
                {profileData.title}
              </p>
            </div>

            {/* Main Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              "{profileData.heroIntro}"
            </p>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Software Development</div>
                  <div className="text-[11px] text-slate-400">React Native • TypeScript • Java</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">QA Automation</div>
                  <div className="text-[11px] text-slate-400">Selenium • Playwright • REST Assured</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: 3D Developer & QA Workspace */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-dark-900/90 to-dark-950/90 p-2 shadow-2xl backdrop-blur-xl">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-1 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-slate-300 text-[10px]">3D Workspace Simulation</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 text-[10px]">
                  <Sparkles className="w-3 h-3" />
                  <span>Real-Time 3D</span>
                </div>
              </div>

              {/* 3D Workspace Canvas Container */}
              <ThreeDWorkspace />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono group"
            aria-label="Scroll to About section"
          >
            <span className="mb-2 tracking-widest uppercase text-[10px]">Explore Portfolio</span>
            <div className="w-6 h-10 rounded-full border border-slate-700 group-hover:border-cyan-500 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
