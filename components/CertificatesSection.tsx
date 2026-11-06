"use client";

import React, { useState } from "react";
import { CERTIFICATES_LIST } from "@/lib/data";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function CertificatesSection() {
  const [expanded, setExpanded] = useState(false);

  const displayedCerts = expanded ? CERTIFICATES_LIST : CERTIFICATES_LIST.slice(0, 6);

  return (
    <section id="certificates" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">06</span>
          <span className="text-white/20">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">Proof of Work</span>
        </div>
        
        <h2 className="font-syne text-4xl sm:text-5xl font-extrabold uppercase text-white mb-16">
          Verified <span className="text-gradient-gold">Certificates</span>
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCerts.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                    {cert.year}
                  </span>
                  <Award className="w-4 h-4 text-text-muted" />
                </div>
                <h3 className="font-syne text-base font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-text-secondary">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex justify-end">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                >
                  <span>View certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {CERTIFICATES_LIST.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/[0.04] border border-white/10 text-white hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <span>{expanded ? "Show Less" : `Show More (${CERTIFICATES_LIST.length - 6} more)`}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
