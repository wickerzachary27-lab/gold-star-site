const stats = [
  { value: "Same Day", label: "Service Available" },
  { value: "Free", label: "Estimates" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal border-y border-white/10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-10 sm:py-12 text-center"
          >
            <div className="font-display font-black text-gold text-4xl sm:text-5xl tracking-tight leading-none">
              {stat.value}
            </div>
            <div className="mt-3 font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
