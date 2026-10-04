import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Database, 
  GitBranch, 
  Code, 
  CheckCircle, 
  Wrench,
  Search,
  Layers
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import SkillsGrid from './SkillsGrid';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'automation-testing':
        return <ShieldCheck className="w-4 h-4 text-cyan-400" />;
      case 'api-testing':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'ci-cd-version-control':
        return <GitBranch className="w-4 h-4 text-purple-400" />;
      case 'development-frameworks':
        return <Code className="w-4 h-4 text-indigo-400" />;
      case 'testing-practices':
        return <CheckCircle className="w-4 h-4 text-teal-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Filter skills based on selected category & search
  const filteredCategories = skillCategories
    .filter(cat => selectedCategory === 'all' || cat.id === selectedCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(s => 
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/50">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNICAL COMPETENCIES"
          title="Skills &amp; Testing Toolchain"
          description="A specialized technical toolkit covering enterprise test automation, API verification, database integrity, and modern development."
          badgeColor="emerald"
        />

        {/* Filter Bar & Quick Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-dark-950/70 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
              }`}
            >
              All Toolchains ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-dark-950/70 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. Selenium)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-dark-950/80 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <SkillsGrid
          categories={filteredCategories}
          getCategoryIcon={getCategoryIcon}
          searchQuery={searchQuery}
        />

      </div>
    </section>
  );
}
