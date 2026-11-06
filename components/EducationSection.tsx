"use client";

import React from "react";
import { EDUCATION_LIST } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">05</span>
          <span className="text-white/20">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">Academic Path</span>
        </div>
        
        <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white mb-16">
          Education &amp; <span className="text-gradient-gold">Foundation</span>
        </h2>

        {/* Education Timeline */}
        <div className="space-y-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-white uppercase tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="font-body text-sm text-text-secondary mt-1">
                    {edu.institution}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 self-start md:self-auto">
                <span className="font-mono text-xs text-text-muted">{edu.period}</span>
                <span className="px-3.5 py-1.5 rounded-full font-mono text-xs font-bold bg-white/[0.04] border border-white/10 text-accent">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
