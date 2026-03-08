// Services — Audit entry points + full client journey ladder
import { Search, Settings, ShieldCheck, ArrowRight, Check, Star, Rocket, Brain, Cpu, Shield, ChevronDown } from 'lucide-react'

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

const JOURNEY_STEPS = [
  {
    step: 1,
    icon: Search,
    name: 'Intelligence Snapshot',
    price: '$2,500',
    period: 'one-time',
    tagline: 'See where you stand',
    description: 'A single deep-dive audit with actionable findings and a clear roadmap. The foundation every engagement starts with.',
    features: [
      'Choice of any single audit product',
      'Full competitive analysis report',
      'Quantified revenue impact with methodology',
      '90-day prioritized action roadmap',
      'One strategy call with Joel',
    ],
    highlighted: false,
    color: 'border-l-accent-blue',
  },
  {
    step: 2,
    icon: Rocket,
    name: 'Growth Engine',
    price: '$2,500-$3,500',
    period: '/month',
    tagline: 'Leads. Appointments. Revenue.',
    description: 'What every business owner wants immediately: more leads, more appointments, more revenue. Strategy-informed advertising plus an AI voice agent that never misses a call.',
    features: [
      'AI-powered Meta and Google ads informed by audit data',
      'AI voice agent — answers every call within 2 rings, 24/7',
      'Prospect qualification using your competitive positioning',
      'Direct calendar booking — no missed leads, ever',
      'Performance dashboard: leads, calls, appointments, revenue',
      '$2,500 one-time setup fee',
    ],
    highlighted: false,
    color: 'border-l-warning-orange',
    setupFee: '$2,500 setup',
  },
  {
    step: 3,
    icon: Brain,
    name: 'Strategic Partnership',
    price: '$5,000',
    period: '/month',
    tagline: 'Ongoing competitive intelligence',
    description: 'Now that the Growth Engine is producing revenue and trust is established, the intelligence layer compounds results. Your competitors are not standing still — neither should your strategy.',
    features: [
      'Everything in Growth Engine',
      'Monthly competitive intelligence refresh',
      'AI visibility monitoring and AEO optimization',
      'Strategic advisory sessions',
      'Market opportunity scanning',
      'Priority support',
    ],
    highlighted: true,
    color: 'border-l-accent-blue',
  },
  {
    step: 4,
    icon: Cpu,
    name: 'AI Operations Partnership',
    price: '$7,500',
    period: '/month',
    tagline: 'Implementation, not just recommendations',
    description: 'Full AI operations management. We design, build, and deploy the systems from your roadmap. Custom Cowork plugins with slash commands your team uses daily. Maximus intelligence embedded in your operations.',
    features: [
      'Everything in Strategic Partnership',
      'AI workflow design and implementation',
      'Custom Cowork plugins for your team',
      'Multi-model orchestration setup',
      'Ongoing ROI measurement',
      'Weekly strategic sessions',
      'Dedicated AI operations manager',
    ],
    highlighted: false,
    color: 'border-l-dark-blue',
  },
  {
    step: 5,
    icon: Shield,
    name: 'Maximus AIOS',
    price: '$10,000-$15,000',
    period: '/month',
    tagline: 'Your complete AI operating system',
    description: 'The flagship product. A full AI operating system built, deployed, and managed for your business. Cloud-hosted, accessible from any device, autonomous intelligence that never sleeps.',
    features: [
      'Context Layer — your operations, values, competitive position encoded',
      'Data Layer — CRM, analytics, financials connected via live integrations',
      'Intelligence Layer — continuous competitive monitoring customized to your market',
      'Daily Briefing — morning intelligence delivered to the business owner',
      'Automation Layer — repetitive workflows automated with custom AI agents',
      'Agent Director — autonomous loops monitoring revenue, content, relationships 24/7',
      'Cloud deployed and fully managed — Maximus engineers it, you operate it',
    ],
    highlighted: false,
    color: 'border-l-navy',
    flagship: true,
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

        {/* Client journey ladder */}
        <div className="text-center mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            The Client Journey
          </h3>
          <p className="text-muted-gray max-w-2xl mx-auto mb-2">
            Every step earns the right to offer the next. No step is skipped. No upsell is forced. Each level is earned by demonstrating results.
          </p>
          <p className="text-accent-blue text-sm font-semibold">
            Free Audit → $15,000/month Managed AI Operating System
          </p>
        </div>

        {/* Journey connector line */}
        <div className="max-w-4xl mx-auto">
          {JOURNEY_STEPS.map((tier, i) => {
            const Icon = tier.icon
            return (
              <div key={tier.name} className="relative">
                {/* Connector */}
                {i > 0 && (
                  <div className="flex justify-center py-3">
                    <ChevronDown size={28} className="text-border-gray" />
                  </div>
                )}

                {/* Card */}
                <div
                  className={`rounded-2xl border-l-4 ${tier.color} ${
                    tier.highlighted
                      ? 'bg-navy text-white border border-accent-blue relative shadow-xl'
                      : tier.flagship
                        ? 'bg-gradient-to-r from-navy to-dark-blue text-white relative shadow-xl'
                        : 'bg-white border border-border-gray hover:shadow-lg transition-shadow'
                  } p-6 md:p-8`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 right-6 bg-accent-blue text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={12} /> Most Popular
                    </div>
                  )}
                  {tier.flagship && (
                    <div className="absolute -top-3 right-6 bg-warning-orange text-white px-4 py-1 rounded-full text-xs font-bold">
                      Flagship Product
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left: Step indicator + icon */}
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[80px]">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        tier.highlighted || tier.flagship ? 'bg-accent-blue/20' : 'bg-light-blue'
                      }`}>
                        <Icon size={24} className={tier.highlighted || tier.flagship ? 'text-accent-blue' : 'text-navy'} />
                      </div>
                      <span className={`text-xs font-bold tracking-wider uppercase ${
                        tier.highlighted || tier.flagship ? 'text-blue-300' : 'text-muted-gray'
                      }`}>
                        Step {tier.step}
                      </span>
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h4 className={`text-xl font-bold ${tier.highlighted || tier.flagship ? 'text-white' : 'text-navy'}`}>
                            {tier.name}
                          </h4>
                          <p className={`text-sm italic ${tier.highlighted || tier.flagship ? 'text-blue-200' : 'text-muted-gray'}`}>
                            {tier.tagline}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 md:text-right">
                          <span className={`text-2xl font-bold ${
                            tier.highlighted ? 'text-accent-blue' : tier.flagship ? 'text-warning-orange' : 'text-navy'
                          }`}>
                            {tier.price}
                          </span>
                          <span className={`text-sm ${tier.highlighted || tier.flagship ? 'text-blue-200' : 'text-muted-gray'}`}>
                            {tier.period}
                          </span>
                          {tier.setupFee && (
                            <span className={`text-xs block ${tier.highlighted || tier.flagship ? 'text-blue-300' : 'text-muted-gray'}`}>
                              + {tier.setupFee}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className={`text-sm mb-4 leading-relaxed ${
                        tier.highlighted || tier.flagship ? 'text-blue-100' : 'text-muted-gray'
                      }`}>
                        {tier.description}
                      </p>

                      <ul className="grid md:grid-cols-2 gap-2">
                        {tier.features.map((f) => (
                          <li
                            key={f}
                            className={`flex items-start gap-2 text-sm ${
                              tier.highlighted || tier.flagship ? 'text-blue-100' : 'text-body-gray'
                            }`}
                          >
                            <Check
                              size={15}
                              className={`${
                                tier.highlighted || tier.flagship ? 'text-accent-blue' : 'text-success-green'
                              } mt-0.5 flex-shrink-0`}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Territorial exclusivity add-on */}
          <div className="mt-8 bg-light-blue rounded-2xl p-6 md:p-8 border border-accent-blue/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy">Territorial Exclusivity</h4>
                  <p className="text-sm text-muted-gray mt-1">
                    Available as an add-on at any tier. Maximus will never advise a direct competitor in your market.
                    Your strategic intelligence is permanently protected.
                  </p>
                </div>
              </div>
              <div className="md:text-right flex-shrink-0">
                <span className="text-xl font-bold text-navy">+$1,500-$2,000</span>
                <span className="text-sm text-muted-gray">/month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg"
          >
            Start With a Free Audit <ArrowRight size={20} />
          </a>
          <p className="text-muted-gray text-sm mt-3">
            No commitment. No credit card. See where you stand in 48 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
