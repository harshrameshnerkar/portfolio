"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/85 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#home"
          className="font-syne text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-accent transition-colors"
        >
          Harsh Nerkar
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Work", href: "#work" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative font-body text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-white transition-colors duration-200"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] bg-accent transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Action & Status */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.03] border border-white/10 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for new opportunities</span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-accent hover:text-black transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
