"use client";

import React from "react";
import { EXPERIENCES } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">03</span>
          <span className="text-white/20">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">Career Trajectory</span>
        </div>
        
        <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white mb-16">
          Where I&apos;ve <span className="text-gradient-gold">Worked</span>
        </h2>

        {/* Timeline / Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-start md:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs text-text-secondary mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="font-mono text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-accent self-start md:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed mb-6 pl-0 md:pl-14">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pl-0 md:pl-14">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.03] border border-white/5 text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

