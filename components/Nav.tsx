"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = useCallback((id: string) => {
    setOpen(false);
    setTimeout(() => scrollToSection(id), 10);
  }, []);

  const handleBrandClick = useCallback(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-charcoal shadow-[0_1px_0_0_rgba(245,166,35,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            onClick={handleBrandClick}
            className="group flex items-center gap-2 font-display font-bold text-white tracking-tight"
            aria-label="Gold Star Plumbing — back to top"
          >
            <span className="text-gold text-xl leading-none transition-transform group-hover:rotate-12">
              ★
            </span>
            <span className="text-base sm:text-lg uppercase tracking-wide">
              Gold Star Plumbing
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="font-display text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:5415255547"
              className="inline-flex items-center gap-2 bg-gold px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-charcoal hover:bg-white transition-colors"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call Now
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={2.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-charcoal transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="font-display text-3xl font-bold uppercase tracking-wider text-white hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:5415255547"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-3 bg-gold px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-charcoal"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            (541) 525-5547
          </a>
        </div>
      </div>
    </>
  );
}
