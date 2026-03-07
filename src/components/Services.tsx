// Services — Audit products and service tiers
import { Search, Settings, ShieldCheck, ArrowRight, Check, Star } from 'lucide-react'

const AUDITS = [
  {
    icon: Search,
    title: 'Competitive Intelligence Audit',
    subtitle: 'For businesses invisible to AI',
    description:
      'A comprehensive competitive audit that reveals exactly where you stand against competitors in the AI-driven landscape. Includes AI Engine Optimization scoring, competitor gap analysis, revenue impact quantification, and a 90-day action roadmap.',
    features: [
      'AI visibility scoring across all major engines',
      '3-5 real competitor analysis with verified data',
      'Revenue at risk quantification',
      'Prioritized 90-day improvement roadmap',
    ],
    price: 'Free',
    priceNote: 'Strategic entry point',
    accent: 'accent-blue',
    bgAccent: 'bg-blue-50',
  },
  {
    icon: Settings,
    title: 'AI Operations Failure Audit',
    subtitle: 'For businesses frustrated with AI ROI',
    description:
      'Diagnose why your AI investments aren\'t paying off. We analyze your AI stack, identify fragmentation, measure the gap between investment and return, and prescribe a redesigned system using the 3D Chess framework.',
    features: [
      'Full AI stack fragmentation analysis',
      'ROI gap assessment per tool',
      'Workflow redesign recommendations',
      'Maximus AI Agent Team prescription',
    ],
    price: '$2,500',
    priceNote: 'One-time deep dive',
    accent: 'warning-orange',
    bgAccent: 'bg-orange-50',
  },
  {
    icon: ShieldCheck,
    title: 'AI Compliance Readiness Audit',
    subtitle: 'For businesses using AI in regulated environments',
    description:
      'Map your current AI usage against the 2026 regulatory landscape. Colorado AI Act, California, Virginia, Florida, FTC federal guidelines — know your risk before regulators find it for you.',
    features: [
      'Multi-state regulatory mapping',
      'Risk scoring by AI application',
      'Compliance gap identification',
      'Remediation roadmap with priorities',
    ],
    price: '$2,500',
    priceNote: 'One-time assessment',
    accent: 'success-green',
    bgAccent: 'bg-green-50',
  },
]

const TIERS = [
  {
    name: 'Intelligence Snapshot',
    price: '$2,500',
    period: 'one-time',
    description: 'A single deep-dive audit with actionable findings and a clear roadmap.',
    features: [
      'Choice of any single audit',
      'Full competitive analysis report',
      'Quantified revenue impact',
      '90-day action roadmap',
      'One strategy call',
    ],
    highlighted: false,
  },
  {
    name: 'Strategic Partnership',
    price: '$5,000',
    period: '/month',
    description: 'Ongoing competitive intelligence, strategic advisory, and AI optimization.',
    features: [
      'All three audit products',
      'Monthly competitive intelligence updates',
      'AI visibility monitoring',
      'Strategic advisory calls',
      'Priority support',
      'AEO optimization guidance',
    ],
    highlighted: true,
  },
  {
    name: 'AI Operations Partnership',
    price: '$7,500',
    period: '/month',
    description: 'Full AI operations management — strategy, implementation, and continuous optimization.',
    features: [
      'Everything in Strategic Partnership',
      'AI workflow design & implementation',
      'Multi-model orchestration setup',
      'Ongoing ROI measurement',
      'Weekly strategic sessions',
      'Dedicated AI operations manager',
    ],
    highlighted: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Three Entry Points.
            <br />
            <span className="text-muted-gray">One Strategic Platform.</span>
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed">
            Every engagement starts with intelligence. Whether you're invisible to AI, frustrated
            with failed implementations, or navigating new regulations — we meet you where you are.
          </p>
        </div>

        {/* Audit products */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {AUDITS.map((audit) => {
            const Icon = audit.icon
            return (
              <div
                key={audit.title}
                className="bg-white rounded-2xl border border-border-gray hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`${audit.bgAccent} p-6`}>
                  <Icon size={32} className={`text-${audit.accent} mb-3`} />
                  <h3 className="text-xl font-bold text-navy">{audit.title}</h3>
                  <p className={`text-${audit.accent} text-sm font-medium mt-1`}>{audit.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-gray text-sm leading-relaxed mb-6">{audit.description}</p>
                  <ul className="space-y-3 mb-6">
                    {audit.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-body-gray">
                        <Check size={16} className={`text-${audit.accent} mt-0.5 flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border-gray pt-4 flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-navy">{audit.price}</span>
                      <span className="text-muted-gray text-xs block">{audit.priceNote}</span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-accent-blue font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Learn more <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service tiers */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            Ongoing Strategic Partnership Tiers
          </h3>
          <p className="text-muted-gray max-w-2xl mx-auto">
            The audit opens the door. The partnership drives transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-navy text-white border-2 border-accent-blue relative'
                  : 'bg-white border border-border-gray'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-blue text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} /> Most Popular
                </div>
              )}
              <h4 className={`text-lg font-bold ${tier.highlighted ? 'text-white' : 'text-navy'} mb-2`}>
                {tier.name}
              </h4>
              <div className="mb-4">
                <span className={`text-3xl font-bold ${tier.highlighted ? 'text-accent-blue' : 'text-navy'}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlighted ? 'text-blue-200' : 'text-muted-gray'}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${tier.highlighted ? 'text-blue-200' : 'text-muted-gray'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${
                      tier.highlighted ? 'text-blue-100' : 'text-body-gray'
                    }`}
                  >
                    <Check
                      size={16}
                      className={`${tier.highlighted ? 'text-accent-blue' : 'text-success-green'} mt-0.5 flex-shrink-0`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-accent-blue text-white hover:bg-blue-500'
                    : 'bg-light-blue text-navy hover:bg-blue-100'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
