// In-Development Services — 4 services with HONEST status labels
// Copy: VERBATIM from directive 87566ed7 amendment (Joel-approved language).
// Status labels MUST appear verbatim. CTAs are waitlists, never "Contact Sales".

interface InDevService {
  name: string;
  status: string;
  tagline: string;
  description: string;
  cta: string;
  priorityFlag?: string;
}

const SERVICES: InDevService[] = [
  {
    name: 'Trojan Horse Strategic Intelligence Audit',
    status: 'IN DEVELOPMENT — Target Launch: Q2 2026',
    tagline: 'A deeper strategic audit for businesses ready to make their next major move.',
    description:
      "Where the Competitive Edge Report maps your position, the Trojan Horse Audit maps your opportunity. It is a deep-dive strategic intelligence engagement that combines competitive analysis, market positioning, governance risk review, and decision-ready recommendations for businesses facing a material strategic choice — an acquisition, a market expansion, a repositioning, or a workforce transformation. Currently under sandbox validation; 3 trial audits complete, A-grade threshold not yet cleared. When it clears, it launches. We do not sell unfinished work.",
    cta: 'Join the Waitlist',
  },
  {
    name: 'Maximus Intelligence Platform (MIP)',
    status: 'IN DEVELOPMENT — Target Launch: Q2 2026',
    tagline: 'Always-on competitive intelligence for businesses that need to stay three steps ahead.',
    description:
      'MIP is the subscription-tier evolution of the Competitive Edge Report — a continuously-updating intelligence dashboard that monitors your competitors, your AI visibility, your market signals, and your category trends in near-real-time. Think of it as a research department that never sleeps. Currently in build; first subscribers onboard Q2 2026. Priority waitlist reserved for Competitive Edge Report clients who want continuous monitoring after their initial audit.',
    cta: 'Join the MIP Priority Waitlist',
    priorityFlag: 'Priority for prior Edge Report clients',
  },
  {
    name: 'Managed AI Agent Services',
    status: 'IN DEVELOPMENT — Target Launch: Q3 2026',
    tagline:
      'Dedicated AI agents that handle the work the way your best employees would — never manipulating, never deceiving, always pro-human.',
    description:
      'Managed Agent Services provides purpose-built AI agents for specific business functions: client success (Lea), prospecting and nurture (Susan), sales conversation and closing (Lucas), negotiation strategy (Guy), and quality control on every deliverable (Carol). Every agent inherits from the Maximus Constitution, including Article 27 (Human Shield Doctrine) and Article 26 (Zero Latent Trait Contamination). Your agents refuse deception, escalate on manipulation, and operate transparently. Currently in Phase 1 internal validation; client deployment planned Q3 2026.',
    cta: 'Join the Waitlist',
  },
  {
    name: 'Maximus Broker Certification Program',
    status: 'IN DEVELOPMENT — Target Launch: Q3 2026',
    tagline: 'Turn the AI displacement event into a career rebuild. Protect others. Earn while you do it.',
    description:
      'The Maximus Broker Certification Program trains and certifies displaced professionals — anyone whose role was eliminated or diminished by AI adoption — to run their own AI-backed advisory practice in their local market. Certified Brokers deliver Maximus services (Competitive Edge Reports, MIP subscriptions, Managed Agents) to local businesses under the Maximus brand and quality standard, with Maximus-provided curriculum, intelligence stack, deliverables engine, and ongoing support. Currently in curriculum build with first cohort targeted Q3 2026. If you were laid off from a white-collar role and want an ownership path forward, this is it.',
    cta: 'Join the Broker Waitlist',
  },
];

export function InDevServices() {
  return (
    <section id="in-dev" className="bg-[#060918] hex-grid">
      <div className="container-max">
        <div className="text-label mb-3">IN DEVELOPMENT — HONEST LABELS</div>
        <div className="cyan-beam mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 max-w-3xl">
          What's coming. <span className="text-[#00D4FF]">When it's ready.</span>
        </h2>
        <p className="text-lg text-[#E0F7FF]/70 max-w-3xl mb-12">
          Every Maximus service is sandbox-validated to A-grade before it opens to paying clients.
          The four services below are in active development with honest target launch dates. Join a
          waitlist below; we ship when the work clears the bar, not on a marketing schedule.
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s) => (
            <article key={s.name} className="glass-card p-7 lg:p-9 flex flex-col">
              <span className="status-pill mb-4 self-start">{s.status}</span>
              <h3 className="font-display text-2xl text-white mb-3">{s.name}</h3>
              <p className="text-[#00D4FF] italic font-display text-base mb-5 leading-relaxed">
                {s.tagline}
              </p>
              <p className="text-sm text-[#E0F7FF]/70 leading-relaxed mb-6 flex-grow">
                {s.description}
              </p>
              {s.priorityFlag && (
                <p className="text-xs font-mono text-[#00B4D8] mb-4 uppercase tracking-wider">
                  ★ {s.priorityFlag}
                </p>
              )}
              <a
                href={`#contact?service=${encodeURIComponent(s.name)}`}
                className="btn-secondary self-start"
              >
                {s.cta} →
              </a>
            </article>
          ))}
        </div>

        <div className="glass-card mt-12 p-7 lg:p-9 max-w-3xl mx-auto text-center">
          <p className="font-display text-xl text-[#00D4FF] mb-3">
            "Those who have the ability have the responsibility to help and protect those who can't
            help and protect themselves."
          </p>
          <p className="text-sm text-[#E0F7FF]/65">
            Inscribed into the Maximus Constitution. The reason the Broker Certification Program
            exists.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InDevServices;
