import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Smartphone } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:border-cyan-500/40 transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
        
        {/* Visual Preview / Mobile Showcase (Left) */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <div 
            onClick={() => onOpenCaseStudy(project)}
            className="group relative cursor-pointer max-w-xs w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 transition-transform duration-500 hover:scale-[1.02]"
          >
            <img
              src={project.coverImage}
              alt={`${project.title} Preview Screen`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
            
            {/* Floating Overlay Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-2.5 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white">Interactive Case Study</span>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Content & Metadata (Right) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Featured Project
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-cyan-300/90 font-medium">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {project.description}
          </p>

          {/* Core Features Teaser */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Key Highlights:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>AI Financial Coach &amp; Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>"Can I Afford It?" Decision Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Recurring Subscriptions &amp; Limits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Savings Milestones &amp; Emergency Buffer</span>
              </div>
            </div>
          </div>

          {/* Technologies Stack Tags */}
          <div className="space-y-2 pt-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technologies:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>View 10-Part Case Study</span>
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 text-xs sm:text-sm font-medium border border-purple-500/30 transition-colors"
            >
              <FigmaIcon className="w-4 h-4 text-purple-400" />
              <span>Figma Design</span>
            </a>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
