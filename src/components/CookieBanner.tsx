"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "dv-cookie-consent";

export function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAccepted(stored === "accepted");
    } catch {
      setAccepted(false);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
      setAccepted(true);
    } catch {
      setAccepted(true);
    }
  }

  if (accepted === null || accepted) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-dv-dark text-white p-4 shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use a minimal cookie to remember your consent.{" "}
          <Link href="/datenschutz" className="text-white underline hover:no-underline">
            Datenschutz
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <Link
            href="/datenschutz"
            className="px-4 py-2 text-sm border border-white/50 rounded hover:bg-white/10 transition"
          >
            Datenschutz
          </Link>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 text-sm bg-dv-hero text-white rounded hover:bg-dv-hero/90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
