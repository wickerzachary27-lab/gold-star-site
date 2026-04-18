const pillars = [
  {
    number: "01",
    title: "Same Day Service",
    body: "We show up when we say we will — often the same day you call. No waiting around for a plumber who never shows.",
  },
  {
    number: "02",
    title: "Fair, Upfront Pricing",
    body: "We give you a clear estimate before any work begins. No surprise charges, no hidden fees — ever.",
  },
  {
    number: "03",
    title: "Work You Can Trust",
    body: "Licensed, insured, and backed by a satisfaction guarantee. We clean up after every job and treat your home with respect.",
  },
];

export default function WhyGoldStar() {
  return (
    <section
      id="about"
      className="relative bg-charcoal py-24 sm:py-32 scroll-mt-20 overflow-hidden"
    >
      {/* subtle pattern accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f5a623_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-display font-black text-white leading-[1] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]">
            Why Eugene
            <br />
            <span className="text-gold">Calls Us.</span>
          </h2>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {pillars.map((p) => (
            <div key={p.number} className="relative">
              <div className="font-display font-black text-gold text-6xl sm:text-7xl leading-none tracking-tighter">
                {p.number}
              </div>
              <div className="mt-5 h-px w-12 bg-gold" />
              <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed max-w-sm">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
