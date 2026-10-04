import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: 'QA Automation & Testing Frameworks',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or project overview';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should contain at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
      <h3 className="text-xl font-bold text-white mb-2">
        Send a Message
      </h3>
      <p className="text-xs text-slate-400 mb-6">
        Fill in the details below. This form validates your message and provides a seamless direct dispatch to {profileData.email}.
      </p>

      {submitted && (
        <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-sm">Message Prepared!</span>
            Your default email client has been opened with your inquiry pre-filled. If it didn't open automatically, you can email directly at <a href={`mailto:${profileData.email}`} className="underline font-bold">{profileData.email}</a>.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1">
            Your Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Jane Doe"
            className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-cyan-500/60'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1">
            Your Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. jane@company.com"
            className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
              errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-cyan-500/60'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="contact-project-type" className="block text-xs font-mono text-slate-300 mb-1">
            Project Type
          </label>
          <select
            id="contact-project-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors"
          >
            <option value="QA Automation & Testing Frameworks">QA Automation &amp; Testing Frameworks (Selenium/Playwright)</option>
            <option value="Mobile App Development">Mobile App Development (React Native / Expo)</option>
            <option value="API Testing & Backend Verification">API Testing &amp; Backend Verification (REST Assured/Postman)</option>
            <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
            <option value="Full-time / Contract Engineering Opportunity">Full-time / Contract Engineering Opportunity</option>
            <option value="General Technical Inquiry">General Technical Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1">
            Message <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your project, timeline, or engineering opportunity..."
            className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
              errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-cyan-500/60'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
