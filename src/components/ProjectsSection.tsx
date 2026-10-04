import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FEATURED WORK"
          title="Digital Product Architecture"
          description="Explore engineered applications built with focus on clean architecture, intuitive mobile UX, and end-to-end quality standards."
          badgeColor="cyan"
        />

        {/* Scalable Projects Grid / Showcase */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
