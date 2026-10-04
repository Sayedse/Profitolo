import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Smartphone, Layers, Cpu, Code2, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';
import ProjectGallery from './ProjectGallery';
import { Project } from '../types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'case-study' | 'gallery' | 'features'>('case-study');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-dark-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/60 backdrop-blur-md">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-medium uppercase tracking-wider">
                Case Study • {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/5 bg-dark-900/50 overflow-x-auto text-xs font-medium">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`pb-2.5 px-3 border-b-2 font-medium transition-colors ${
                activeTab === 'case-study'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              10-Part Case Study
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-2.5 px-3 border-b-2 font-medium transition-colors ${
                activeTab === 'features'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Core Features &amp; Screens
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`pb-2.5 px-3 border-b-2 font-medium transition-colors ${
                activeTab === 'gallery'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Mobile UI Gallery ({project.gallery.length})
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10 text-slate-300 text-sm leading-relaxed">
            
            {activeTab === 'case-study' && (
              <div className="space-y-12">
                
                {/* 1. Overview */}
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">1</span>
                    Overview
                  </div>
                  <h4 className="text-xl font-bold text-white">Project Overview</h4>
                  <p className="text-slate-300 text-base">{project.overview}</p>
                  <p className="text-slate-400 text-sm">{project.description}</p>
                </section>

                {/* 2 & 3. Problem and Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <section className="p-5 rounded-xl bg-slate-950/60 border border-rose-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase">
                      <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px]">2</span>
                      The Problem
                    </div>
                    <h5 className="text-base font-semibold text-white">Fragmented Financial Control</h5>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.problem}</p>
                  </section>

                  <section className="p-5 rounded-xl bg-slate-950/60 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">3</span>
                      The Solution
                    </div>
                    <h5 className="text-base font-semibold text-white">Unified AI Financial Guidance</h5>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.solution}</p>
                  </section>
                </div>

                {/* 4. Core Features Summary */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">4</span>
                    Core Features
                  </div>
                  <h4 className="text-xl font-bold text-white">Feature Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.coreFeatures.map((feat, i) => (
                      <div key={i} className="p-4 rounded-xl bg-dark-950/80 border border-white/5 space-y-1.5 hover:border-cyan-500/30 transition-colors">
                        <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-slate-400">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 5. Design Process */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px]">5</span>
                    Design Process &amp; UX
                  </div>
                  <h4 className="text-xl font-bold text-white">UI/UX Strategy &amp; Figma Architecture</h4>
                  <div className="space-y-2.5">
                    {project.designProcess.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-dark-950/50 border border-white/5">
                        <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. Development */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px]">6</span>
                    Development
                  </div>
                  <h4 className="text-xl font-bold text-white">Technical Implementation</h4>
                  <div className="space-y-2.5">
                    {project.development.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-dark-950/50 border border-white/5">
                        <Code2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 7. Architecture */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">7</span>
                    Architecture
                  </div>
                  <h4 className="text-xl font-bold text-white">Application Architecture</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.architecture.map((layer, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-dark-950/70 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                          <Layers className="w-4 h-4" />
                          <span>Layer 0{idx + 1}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300">{layer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 8. Project Gallery Preview */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">8</span>
                      Project Gallery
                    </div>
                    <button
                      onClick={() => setActiveTab('gallery')}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                    >
                      View all screens ({project.gallery.length})
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="text-xl font-bold text-white">Mobile Interface Previews</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.gallery.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedGalleryImg(item.image)}
                        className="group relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 cursor-pointer aspect-[9/16]"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {item.tag}
                          </span>
                          <p className="text-xs font-semibold text-white mt-1">{item.title}</p>
                        </div>
                        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 9. Technologies */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px]">9</span>
                    Technologies
                  </div>
                  <h4 className="text-xl font-bold text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 text-cyan-300 font-mono text-xs border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* 10. Source & Repositories */}
                <section className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">10</span>
                    Source Links
                  </div>
                  <h4 className="text-xl font-bold text-white">Repository &amp; Design System</h4>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 font-medium text-xs border border-purple-500/30 transition-colors"
                    >
                      <FigmaIcon className="w-4 h-4 text-purple-400" />
                      <span>View Figma Design</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                    </a>
                  </div>
                </section>

              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Supported Project Features</h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Features and flows implemented in Monevo AI mobile architecture.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.coreFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-dark-950/70 border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 pl-6">{feat.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>App Screens Included:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.screens.map((screen) => (
                      <span
                        key={screen}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {screen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <ProjectGallery items={project.gallery} />
            )}

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-dark-950 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View GitHub</span>
              </a>

              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 text-xs font-medium border border-purple-500/30 transition-colors"
              >
                <FigmaIcon className="w-4 h-4 text-purple-400" />
                <span>View Figma Design</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>

        {/* Full Image Lightbox */}
        {selectedGalleryImg && (
          <div
            onClick={() => setSelectedGalleryImg(null)}
            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-sm w-full max-h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={selectedGalleryImg}
                alt="Enlarged mobile screen"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white hover:bg-black"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
