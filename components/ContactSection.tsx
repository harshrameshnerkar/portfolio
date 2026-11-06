"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">07</span>
          <span className="text-white/20">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">Get In Touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight">
              Let&apos;s Work <span className="text-gradient-gold">Together</span>.
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Open to AI/ML engineering roles, internships, and ambitious collaborations. Have an idea or a team that needs an extra brain on the model? Send a message and let&apos;s build something remarkable together.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <a
                href="mailto:harshrameshnerkar@gmail.com"
                className="flex items-center gap-3 text-sm font-semibold text-white hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <span>harshrameshnerkar@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-muted">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 7522946205</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-muted">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/5">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-text-secondary text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I will get back to you directly at your email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Project / Role Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI/ML Role, Multi-Agent Project, Consulting"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your ideas or timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
