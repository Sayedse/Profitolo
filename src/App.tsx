import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero with 3D Workspace */}
        <Hero />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Projects Section (Monevo AI) */}
        <ProjectsSection />

        {/* 4. Skills Section */}
        <SkillsSection />

        {/* 5. Experience Timeline */}
        <ExperienceSection />

        {/* 6. Education Section */}
        <EducationSection />

        {/* 7. Resume Section */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Full Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
