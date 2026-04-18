import FinancingCTA from "./FinancingCTA";

export default function FinancingBanner() {
  return (
    <section className="relative bg-gold">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-charcoal/70">
              Financing
            </p>
            <h2 className="mt-3 font-display font-black text-charcoal leading-[1] tracking-tight text-[clamp(2rem,5vw,3.5rem)]">
              Flexible Financing Available.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-xl">
              Don&rsquo;t let a plumbing emergency break the bank. We offer
              financing options to fit your budget.
            </p>
          </div>
          <div className="shrink-0">
            <FinancingCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
