import React from 'react';
import { AnimatePresence } from 'framer-motion';
import SkillCard from './SkillCard';
import { SkillCategory } from '../types';

interface SkillsGridProps {
  categories: SkillCategory[];
  getCategoryIcon: (id: string) => React.ReactNode;
  searchQuery: string;
}

export default function SkillsGrid({ categories, getCategoryIcon, searchQuery }: SkillsGridProps) {
  if (categories.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        No technical skills found matching "{searchQuery}".
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {categories.map((category) => (
          <SkillCard
            key={category.id}
            category={category}
            categoryIcon={getCategoryIcon(category.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
