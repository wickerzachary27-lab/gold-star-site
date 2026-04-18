"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function HeroCTAs() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
      <button
        onClick={scrollToContact}
        className="group inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-charcoal hover:bg-white transition-colors"
      >
        Get a Free Estimate
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </button>
      <a
        href="tel:5415255547"
        className="group inline-flex items-center justify-center gap-2 border-2 border-white px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-charcoal transition-colors"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        Call Now
      </a>
    </div>
  );
}
