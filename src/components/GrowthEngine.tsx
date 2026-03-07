// GrowthEngine — The conversion system
import { Megaphone, Phone, BarChart3, ArrowDown } from 'lucide-react'

const LAYERS = [
  {
    number: '01',
    icon: Megaphone,
    title: 'Intelligent Lead Generation',
    subtitle: 'What they feel on day one',
    description:
      'AI-powered advertising through Meta and Google, informed by competitive intelligence from your audit. We target the gaps your competitors aren\'t filling — services they\'re not promoting, queries with unmet demand, pain points nobody addresses.',
    color: 'bg-accent-blue',
    lightColor: 'bg-blue-50',
  },
  {
    number: '02',
    icon: Phone,
    title: 'AI-Powered Conversion',
    subtitle: 'What converts leads into revenue',
    description:
      'An AI voice agent answers every inbound call within two rings, qualifies prospects using a script built from your service menu and competitive positioning, and books directly into your calendar. 24/7. No missed leads. Ever.',
    color: 'bg-dark-blue',
    lightColor: 'bg-blue-50',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Strategic Intelligence Layer',
    subtitle: 'What they don\'t know they need',
    description:
      'AEO optimization, review generation, reputation monitoring, competitive intelligence refresh, and compliance awareness. This is the strategic retainer that compounds value over time — the longer you stay, the wider your competitive moat becomes.',
    color: 'bg-navy',
    lightColor: 'bg-light-blue',
  },
]

export default function GrowthEngine() {
  return (
    <section className="py-24 md:py-32 bg-ice-blue">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">Growth Engine</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Leads. Conversion. Intelligence.
            <br />
            <span className="text-muted-gray">All Three. Day One.</span>
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed">
            Other consultants give you a report and wish you luck. Maximus delivers
            a complete growth system — lead generation powered by competitive intelligence,
            AI-powered call handling, and ongoing strategic optimization.
          </p>
        </div>

        {/* Layers */}
        <div className="max-w-3xl mx-auto space-y-6">
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.number}>
                <div className="bg-white rounded-2xl p-8 border border-border-gray hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 ${layer.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-blue font-bold text-sm">Layer {layer.number}</span>
                        <span className="text-muted-gray text-sm">—</span>
                        <span className="text-muted-gray text-sm italic">{layer.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">{layer.title}</h3>
                      <p className="text-muted-gray leading-relaxed">{layer.description}</p>
                    </div>
                  </div>
                </div>
                {i < LAYERS.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown size={24} className="text-border-gray" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Value comparison */}
        <div className="mt-16 bg-navy rounded-2xl p-8 md:p-12 text-center text-white max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            The Maximus Advantage
          </h3>
          <p className="text-blue-200 mb-8">
            Competitors charge $15,000-$25,000 upfront for lead generation and call handling alone —
            with no strategic intelligence behind it. Maximus starts at $2,500.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-risk-red text-sm font-semibold mb-2">Typical Agency</div>
              <div className="text-3xl font-bold">$15K-$25K</div>
              <div className="text-blue-300 text-xs mt-1">upfront, no strategy</div>
            </div>
            <div className="bg-accent-blue/20 border border-accent-blue/30 rounded-xl p-6">
              <div className="text-accent-blue text-sm font-semibold mb-2">Maximus</div>
              <div className="text-3xl font-bold">$2,500</div>
              <div className="text-blue-300 text-xs mt-1">audit + setup, strategy-driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
