import Image from "next/image";
import HeroCTAs from "./HeroCTAs";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      {/* Background image */}
      <Image
        src="/images/hero-plumber-pipes.jpg"
        alt="Plumber working on copper pipes"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-gold">
            <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
            Eugene, Oregon
          </p>
          <h1 className="font-display font-black text-white leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,6rem)]">
            Eugene&rsquo;s
            <br />
            Trusted
            <br />
            <span className="text-gold">Plumber.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">
            Fast, reliable, and fairly priced. Serving Eugene and surrounding
            areas &mdash; available for emergencies.
          </p>
          <div className="mt-10">
            <HeroCTAs />
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold z-10" />
    </section>
  );
}
