"use client";

import { ArrowRight } from "lucide-react";

export default function FinancingCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="group inline-flex items-center gap-2 bg-charcoal px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
    >
      Ask About Financing
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </button>
  );
}
