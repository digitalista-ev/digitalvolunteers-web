"use client";

import Link from "next/link";
import { mainNav } from "../../content/menus";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/2022/04/logo.webp"
            alt="Digital Volunteers"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-dv-dark hover:text-dv-hero font-medium transition"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-2">
          {mainNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="py-2 text-dv-dark hover:text-dv-hero font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
