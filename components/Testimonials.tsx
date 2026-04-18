import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Called at 8am with a burst pipe and Dylan had someone out by noon. Fixed fast, priced fairly, and left the place spotless. Couldn\u2019t ask for more.",
    name: "Mark T.",
    location: "Eugene",
  },
  {
    quote:
      "Best plumber I\u2019ve used in Eugene. Upfront about costs, did the job right the first time, and didn\u2019t try to upsell me on stuff I didn\u2019t need.",
    name: "Rachel S.",
    location: "Springfield",
  },
  {
    quote:
      "Gold Star came out same day for a water heater replacement. Professional crew, quick work, and the financing option made it easy. Highly recommend.",
    name: "James K.",
    location: "Eugene",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Word on the Street
          </p>
          <h2 className="mt-4 font-display font-black text-charcoal leading-[1] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]">
            What Neighbors Say.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative bg-charcoal p-8 sm:p-9 flex flex-col shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)]"
            >
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-gold fill-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-base sm:text-lg font-medium text-white leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-white/10">
                <div className="font-display text-sm font-bold uppercase tracking-wider text-gold">
                  {r.name}
                </div>
                <div className="mt-1 text-sm text-white/60">{r.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
