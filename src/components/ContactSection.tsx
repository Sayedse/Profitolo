import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/60">
      {/* Background glow orb */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let’s Build Something Great"
          description="Interested in collaborating on software development, mobile apps, or enterprise QA automation frameworks? Send a direct message."
          badgeColor="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Feel free to reach out directly via email or connect through LinkedIn and GitHub. I'm actively open to freelance opportunities and engineering roles.
              </p>

              {/* Email Card with Copy Trigger */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10 space-y-2">
                <div className="text-xs font-mono text-slate-400">Direct Email:</div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm sm:text-base font-bold text-cyan-400 hover:text-cyan-300 transition-colors font-mono break-all"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[10px] text-emerald-400 font-mono">
                    ✓ Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400">Professional Profiles:</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-950/60 hover:bg-dark-950 border border-white/5 hover:border-cyan-500/30 text-slate-200 text-xs font-medium transition-all group"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-950/60 hover:bg-dark-950 border border-white/5 hover:border-cyan-500/30 text-slate-200 text-xs font-medium transition-all group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
