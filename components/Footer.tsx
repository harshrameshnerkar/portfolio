import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 relative bg-[#060607]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="max-w-md">
            <Link
              href="#home"
              className="font-syne text-xl font-bold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors"
            >
              Harsh Nerkar
            </Link>
            <p className="font-body text-xs sm:text-sm text-text-secondary mt-2">
              AI / ML Engineer · Nagpur, India. Building intelligent, scalable systems that drive real-world impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/harshrameshnerkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshrameshnerkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshrameshnerkar@gmail.com"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-white transition-colors"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/917522946205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-white transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono text-text-muted">
          <div>
            &copy; 2026 Harsh Ramesh Nerkar. All rights reserved.
          </div>
          <div>
            Designed &amp; built with Next.js, Tailwind CSS &amp; Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
}

