// Contact — form (capture only, no fake CRM yet) + email + Jupiter FL presence
// Form posts to a placeholder mailto: until Joel wires a Supabase intake endpoint.
// Davis Honesty: no false-sequence ("we'll respond in 24h") promises until backend exists.

import { useState } from 'react';

export function ContactNew() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[#060918]">
      <div className="container-max grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="text-label mb-3">CONTACT — JUPITER, FL</div>
          <div className="cyan-beam mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-[1.1]">
            Schedule your <span className="text-[#00D4FF]">Competitive Edge Report</span>.
          </h2>
          <p className="text-lg text-[#E0F7FF]/70 mb-8 leading-relaxed">
            Email Joel directly, or use the form. A working discovery call is 30 minutes — no sales
            funnel, no upsell trap. We confirm fit on the call.
          </p>
          <div className="space-y-5">
            <ContactRow
              label="Email"
              value={
                <a className="text-[#00D4FF] hover:underline" href="mailto:joel@maximusintel.com">
                  joel@maximusintel.com
                </a>
              }
            />
            <ContactRow label="Based" value="Jupiter, Florida (Palm Beach County)" />
            <ContactRow label="Coverage" value="Remote-first across the United States" />
            <ContactRow label="Founder" value="Joel Wynns, Founder, Maximus AI" />
          </div>
        </div>
        <form
          className="glass-card p-7 lg:p-9 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const subject = encodeURIComponent('Maximus AI — Discovery Call Request');
            const body = encodeURIComponent(
              `Name: ${fd.get('name')}\nCompany: ${fd.get('company')}\nIndustry: ${fd.get('industry')}\nEmail: ${fd.get('email')}\nMessage:\n${fd.get('message')}`,
            );
            window.location.href = `mailto:joel@maximusintel.com?subject=${subject}&body=${body}`;
            setSubmitted(true);
          }}
        >
          <Input label="Your name" name="name" required />
          <Input label="Company" name="company" required />
          <Input label="Industry" name="industry" required />
          <Input label="Email" name="email" type="email" required />
          <div>
            <label className="text-label block mb-2" htmlFor="msg">
              What problem are you trying to solve?
            </label>
            <textarea
              id="msg"
              name="message"
              rows={4}
              required
              className="w-full bg-[#0A0E27]/70 border border-[#00B4D8]/20 rounded-lg px-4 py-3 text-[#E0F7FF] placeholder:text-[#E0F7FF]/35 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/50 transition-colors"
              placeholder="Brief context — competitive situation, what you've tried, what would make this engagement worth your time."
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center cta-pulse">
            Open email to send →
          </button>
          {submitted && (
            <p className="text-sm text-[#00D4FF]">
              Email composer opened. If nothing happened, send to{' '}
              <a className="underline" href="mailto:joel@maximusintel.com">
                joel@maximusintel.com
              </a>
              .
            </p>
          )}
          <p className="text-xs text-[#E0F7FF]/50 leading-relaxed pt-3 border-t border-[#00B4D8]/10">
            Davis Honesty: this form opens your email client with a pre-filled message. No
            background tracking, no autoresponder lying about a "24 hour" SLA. Joel reads every
            inbound. Reply latency is normally same-day, longer on weekends.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-label mb-1">{label}</div>
      <div className="text-base text-[#E0F7FF]">{value}</div>
    </div>
  );
}

function Input({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-label block mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-[#0A0E27]/70 border border-[#00B4D8]/20 rounded-lg px-4 py-3 text-[#E0F7FF] placeholder:text-[#E0F7FF]/35 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/50 transition-colors"
      />
    </div>
  );
}

export default ContactNew;
