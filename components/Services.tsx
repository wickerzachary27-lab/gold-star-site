import {
  AlertTriangle,
  ArrowDown,
  Droplets,
  Flame,
  Home,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Drain Cleaning",
    description:
      "Clogged sinks, showers, or main lines — cleared fast with the right tools, not guesswork.",
    Icon: Waves,
  },
  {
    title: "Water Heater Repair & Installation",
    description:
      "Tank or tankless, gas or electric. Same-day repairs and full replacements from trusted brands.",
    Icon: Flame,
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Hidden leaks found with precision tools — no unnecessary tear-out, just a targeted fix.",
    Icon: Droplets,
  },
  {
    title: "Sewer Line Services",
    description:
      "Camera inspections, hydro-jetting, and sewer line repair or replacement done right.",
    Icon: ArrowDown,
  },
  {
    title: "Toilet & Fixture Installation",
    description:
      "New toilets, faucets, and fixtures installed clean, level, and built to last.",
    Icon: Wrench,
  },
  {
    title: "Emergency Plumbing",
    description:
      "Burst pipes, flooding, or no water? Call us and we\u2019ll be on the way \u2014 day or night.",
    Icon: AlertTriangle,
  },
  {
    title: "Gas Line Services",
    description:
      "Licensed gas line install, repair, and leak detection handled safely and to code.",
    Icon: Zap,
  },
  {
    title: "Bathroom & Kitchen Plumbing",
    description:
      "Remodels and repairs — from rough-ins to finish fixtures, done to a professional standard.",
    Icon: Home,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-white py-24 sm:py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Our Services
          </p>
          <h2 className="mt-4 font-display font-black text-charcoal leading-[1] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]">
            What We Fix.
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
            From a dripping faucet to a full repipe, Gold Star Plumbing handles
            the whole list. Licensed, insured, and local to Eugene.
          </p>
        </div>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group relative bg-white border-l-4 border-gold p-7 sm:p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-charcoal group-hover:bg-gold transition-colors">
                  <Icon
                    className="h-6 w-6 text-gold group-hover:text-charcoal transition-colors"
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal leading-tight">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-charcoal/70 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
