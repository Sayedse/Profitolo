import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
  categoryIcon: React.ReactNode;
}

export default function SkillCard({ category, categoryIcon }: SkillCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="p-2 rounded-lg bg-dark-950/80 border border-white/10">
            {categoryIcon}
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              {category.name}
            </h3>
            <span className="text-[10px] font-mono text-cyan-400">
              {category.skills.length} competencies
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-5 leading-relaxed font-light">
          {category.description}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg bg-dark-950/90 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
