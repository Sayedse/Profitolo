import React from 'react';
import SectionHeading from './SectionHeading';
import ExperienceTimeline from './ExperienceTimeline';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TRACK RECORD"
          title="Professional Experience"
          description="Direct contributions in software quality assurance, UI and API test automation frameworks, and Agile delivery."
          badgeColor="blue"
        />

        <ExperienceTimeline items={experienceData} />

      </div>
    </section>
  );
}
