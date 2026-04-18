"use client";

const links = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal border-t-2 border-gold">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start md:items-center">
          {/* Left */}
          <div>
            <button
              onClick={backToTop}
              className="flex items-center gap-2 font-display font-bold text-white tracking-tight group"
            >
              <span className="text-gold text-xl leading-none transition-transform group-hover:rotate-12">
                ★
              </span>
              <span className="text-base uppercase tracking-wide">
                Gold Star Plumbing
              </span>
            </button>
            <p className="mt-3 text-sm text-white/60">
              Eugene, OR &middot;{" "}
              <a
                href="tel:5415255547"
                className="hover:text-gold transition-colors"
              >
                (541) 525-5547
              </a>
            </p>
          </div>

          {/* Center */}
          <nav className="flex flex-wrap md:justify-center gap-6 md:gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-xs text-white/50 leading-relaxed">
              &copy; {year} Gold Star Plumbing LLC.
              <br className="hidden sm:block" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
