"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">02</span>
          <span className="text-white/20">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">What I Work With</span>
        </div>
        
        <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white mb-16">
          Skills &amp; <span className="text-gradient-gold">Stack</span>
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent">{cat.id}</span>
                  <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">{cat.count}</span>
                </div>
                <h3 className="font-syne text-xl font-bold text-white mb-6 uppercase tracking-tight">
                  {cat.title}
                </h3>
                
                {/* Tech Badges with Logos */}
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 hover:bg-white/[0.06] transition-all duration-200"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          // Fallback if logo fails
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <span className="font-body text-xs font-medium text-text-secondary">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
