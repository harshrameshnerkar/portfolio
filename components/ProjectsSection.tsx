"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/lib/data";
import { Github, ExternalLink, Sparkles, Layers } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">04</span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">Selected Work</span>
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {[
              { id: "all", label: "All Projects" },
              { id: "agentic", label: "Autonomous Agents & LLMs" },
              { id: "vision", label: "Computer Vision" },
              { id: "internship", label: "Production & Internship" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-white text-black font-bold shadow-md shadow-white/5"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-accent/40 transition-all duration-300"
            >
              <div>
                {/* Project Image & Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-black/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-black/30"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white border border-white/10">
                      {project.org || (project.category === "agentic" ? "Autonomous AI" : "Computer Vision")}
                    </span>
                  </div>

                  {/* Index Number */}
                  <div className="absolute top-4 right-4 font-mono text-xs font-bold text-white/60">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-white/[0.04] text-text-muted border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white uppercase tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.details && project.details.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-white/5">
                      {project.details.slice(0, 2).map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-[11px] text-text-muted leading-relaxed">
                          <span className="text-accent shrink-0 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5 text-accent" />
                  <span>Code</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-black hover:bg-white hover:text-black transition-all duration-200 font-bold"
                  >
                    <span>Explore</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
