import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ReactNode } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white py-24 sm:py-32 scroll-mt-20 border-t border-charcoal/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: info */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Get in Touch
            </p>
            <h2 className="mt-4 font-display font-black text-charcoal leading-[1] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]">
              Get a Free Estimate.
            </h2>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-lg">
              Call or text Dylan directly. We respond fast.
            </p>

            <div className="mt-10 space-y-6">
              <InfoRow
                icon={Phone}
                label="Phone"
                href="tel:5415255547"
                highlighted
              >
                (541) 525-5547
              </InfoRow>
              <InfoRow
                icon={Mail}
                label="Email"
                href="mailto:dylan@goldstarplumbingllc.com"
              >
                dylan@goldstarplumbingllc.com
              </InfoRow>
              <InfoRow icon={MapPin} label="Address">
                PO Box 210, Eugene, OR 97336
              </InfoRow>
              <InfoRow
                icon={Clock}
                label="Hours"
                sub="Emergency service available"
              >
                Mon&ndash;Fri 7am&ndash;6pm
              </InfoRow>
            </div>

            <div className="mt-10 border-l-4 border-gold bg-charcoal p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-gold">
                Locally Owned &amp; Operated
              </p>
              <p className="mt-2 text-white/80 text-sm leading-relaxed">
                Eugene&rsquo;s Leading Plumbing Service Provider. Licensed,
                insured, and proud to serve our community.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

type IconType = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

function InfoRow({
  icon: Icon,
  label,
  sub,
  href,
  highlighted,
  children,
}: {
  icon: IconType;
  label: string;
  sub?: string;
  href?: string;
  highlighted?: boolean;
  children: ReactNode;
}) {
  const body = (
    <>
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center transition-colors ${
          highlighted
            ? "bg-gold group-hover:bg-charcoal"
            : "bg-charcoal group-hover:bg-gold"
        }`}
      >
        <Icon
          className={`h-5 w-5 transition-colors ${
            highlighted
              ? "text-charcoal group-hover:text-gold"
              : "text-gold group-hover:text-charcoal"
          }`}
          strokeWidth={2.5}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/60">
          {label}
        </div>
        <div
          className={`mt-1 font-display font-bold text-charcoal break-words ${
            highlighted ? "text-2xl" : "text-base sm:text-lg"
          }`}
        >
          {children}
        </div>
        {sub && <div className="mt-1 text-sm text-charcoal/60">{sub}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="group flex items-start gap-4">
        {body}
      </a>
    );
  }

  return <div className="group flex items-start gap-4">{body}</div>;
}
