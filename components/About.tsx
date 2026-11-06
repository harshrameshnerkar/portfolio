"use client";

import React from "react";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">01</span>
          <span className="text-white/20">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight">
              Harsh Ramesh <span className="text-gradient-gold">Nerkar</span>
            </h2>
            <p className="font-mono text-xs text-text-muted uppercase tracking-wider mt-3">
              AI / ML Engineer • Nagpur, India
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
              I&apos;m Harsh — a final-year B.Tech Computer Science student with hands-on expertise in Machine Learning, Artificial Intelligence, and Computer Vision. Backed by three professional engineering internships, I build end-to-end, production-grade systems — from multi-agent AI architectures and RAG pipelines to real-time computer vision applications.
            </p>
            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
              I work fluently with Python, Large Language Models, and modern data tooling, and I care deeply about engineering intelligent, scalable systems that drive measurable real-world impact — without losing sight of the user experience around the model.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="glass-card rounded-2xl p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="font-syne text-2xl font-bold text-white">8.23</div>
                <div className="font-mono text-xs text-text-muted uppercase mt-1">CGPA · B.Tech CSE</div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="font-syne text-2xl font-bold text-white">3</div>
                <div className="font-mono text-xs text-text-muted uppercase mt-1">Internships Completed</div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="font-syne text-2xl font-bold text-white">10+</div>
                <div className="font-mono text-xs text-text-muted uppercase mt-1">Shipped AI Projects</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

