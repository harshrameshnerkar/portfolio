"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownRight, FileDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-white/[0.04] border border-white/10 text-white/90">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Harsh Ramesh Nerkar</span>
              <span className="text-white/20">•</span>
              <span className="text-text-secondary">Nagpur, India</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                Harsh Nerkar
              </h1>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-gold">
                Aspiring AI Engineer
              </h2>
            </div>

            <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              An aspiring Artificial Intelligence engineer passionate about building intelligent, human-centered systems — from machine learning models to full-stack AI products. Driven to turn data into impact, and ideas into things that ship. Let&apos;s build something remarkable together.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-accent transition-all duration-300 shadow-lg shadow-white/5"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>

              <a
                href="/certificates/kohli-ai-completion-letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Focus Tags */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2.5">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-text-muted mr-2">
                Focus:
              </span>
              {["Machine Learning", "Computer Vision", "LLMs · RAG", "Multi-Agent AI", "Autonomous Systems"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.03] border border-white/5 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Floating Badge / Visual */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/my_pic.jpeg"
                    alt="Harsh Nerkar"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-text-muted">Status</div>
                      <div className="text-xs font-bold text-white">Open to Work</div>
                    </div>
                    <div className="text-[11px] font-mono font-bold text-accent px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                      AI · ML
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
