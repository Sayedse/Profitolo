import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  badgeColor?: 'cyan' | 'emerald' | 'purple' | 'blue';
  align?: 'left' | 'center';
}

export default function SectionHeading({
  badge,
  title,
  description,
  badgeColor = 'cyan',
  align = 'center',
}: SectionHeadingProps) {
  const badgeColors = {
    cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20',
    emerald: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20',
    purple: 'border-purple-500/30 text-purple-400 bg-purple-950/20',
    blue: 'border-blue-500/30 text-blue-400 bg-blue-950/20',
  };

  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-2xl'}`}>
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${badgeColors[badgeColor]}`}>
        <span>//</span>
        <span>{badge}</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
