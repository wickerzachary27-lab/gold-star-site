"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  "Drain Cleaning",
  "Water Heater",
  "Leak Detection",
  "Sewer Line",
  "Emergency Plumbing",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `New estimate request from ${name || "website"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Needed: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:dylan@goldstarplumbingllc.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-charcoal/10 p-8 sm:p-10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gold">
            <CheckCircle2 className="h-6 w-6 text-charcoal" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-charcoal">
              Message sent.
            </h3>
            <p className="mt-3 text-charcoal/70 leading-relaxed">
              Your email client should have opened with your request. If it
              didn&rsquo;t, call Dylan directly at{" "}
              <a
                href="tel:5415255547"
                className="font-semibold text-charcoal underline decoration-gold underline-offset-4 decoration-2 hover:text-gold"
              >
                (541) 525-5547
              </a>
              . We&rsquo;ll respond fast.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-gold hover:text-charcoal transition-colors"
            >
              Send another &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-charcoal/10 p-7 sm:p-9 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" type="text" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="mt-5">
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-5">
        <SelectField label="Service Needed" name="service" options={services} />
      </div>
      <div className="mt-5">
        <label className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us what&rsquo;s going on..."
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 bg-charcoal px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-gold hover:text-charcoal transition-colors"
      >
        Send Request
        <Send
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2.5}
        />
      </button>
      <p className="mt-4 text-xs text-charcoal/50 text-center">
        Opens your email client. You can also call or text{" "}
        <a
          href="tel:5415255547"
          className="font-semibold text-charcoal hover:text-gold"
        >
          (541) 525-5547
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70 mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        defaultValue=""
        className="w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors"
      >
        <option value="" disabled>
          Select a service
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
