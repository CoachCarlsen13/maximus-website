// Results — Social proof and validated results
import { TrendingUp, Eye, Target, DollarSign } from 'lucide-react'

const METRICS = [
  {
    icon: Eye,
    value: '23x',
    label: 'Higher conversion rate from AI referral visitors vs. organic search',
    source: 'Ahrefs',
  },
  {
    icon: TrendingUp,
    value: '1,850%',
    label: 'Increase in AI-referred demand after AEO optimization',
    source: 'HubSpot',
  },
  {
    icon: DollarSign,
    value: '34.5%',
    label: 'Drop in click-through for #1 organic when AI Overviews appear',
    source: 'Search Engine Land',
  },
  {
    icon: Target,
    value: '12%',
    label: 'Overlap between AI citations and Google top 10 — a new game',
    source: 'Ahrefs',
  },
]

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-semibold text-xs tracking-[0.15em] uppercase mb-4 block">Market Intelligence</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-5">
            The Shift Is Already Here.
            <br />
            <span className="italic font-normal text-muted-gray">The Data Proves It.</span>
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed font-light">
            AI is fundamentally changing how customers find businesses. The companies that
            optimize for AI engines today will dominate their markets tomorrow.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {METRICS.map(({ icon: Icon, value, label, source }) => (
            <div key={value} className="bg-ice-blue rounded-2xl p-6 text-center border border-border-gray/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-light-blue rounded-xl mb-4">
                <Icon size={24} className="text-accent-blue" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{value}</div>
              <p className="text-body-gray text-sm mb-2">{label}</p>
              <p className="text-muted-gray text-xs italic">{source}</p>
            </div>
          ))}
        </div>

        {/* Case study highlight */}
        <div className="bg-ice-blue rounded-3xl p-8 md:p-12 border border-border-gray/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">Validated Results</span>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mt-3 mb-6">
                Real Audits. Real Findings. Real Impact.
              </h3>
              <p className="text-muted-gray leading-relaxed mb-6">
                Our audit pipeline has been stress-tested across multiple industries.
                Every engagement surfaces competitive intelligence that businesses didn't know
                they were missing — quantified in dollars, with a clear path to recovery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-blue font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Revenue at Risk Identified</div>
                    <div className="text-muted-gray text-sm">Quantified $17,600/month in lost revenue from AI invisibility for a Florida med spa</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-blue font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Competitor Blind Spots Exposed</div>
                    <div className="text-muted-gray text-sm">Discovered competitors ranking on AI engines that clients had never heard of</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-blue font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Actionable Roadmap Delivered</div>
                    <div className="text-muted-gray text-sm">Every audit includes a prioritized 90-day plan with specific actions, effort levels, and expected impact</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual score card */}
            <div className="bg-white rounded-2xl p-8 border border-border-gray shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-lg font-bold text-navy mb-1">Sample Audit Scorecard</h4>
                <p className="text-muted-gray text-xs">AI Engine Optimization Score</p>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-body-gray font-medium">Direct Service Query</span>
                    <span className="text-success-green font-bold">Mentioned</span>
                  </div>
                  <div className="w-full bg-border-gray rounded-full h-2.5">
                    <div className="bg-success-green h-2.5 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-body-gray font-medium">Comparison Query</span>
                    <span className="text-warning-orange font-bold">Partial</span>
                  </div>
                  <div className="w-full bg-border-gray rounded-full h-2.5">
                    <div className="bg-warning-orange h-2.5 rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-body-gray font-medium">Problem-Based Query</span>
                    <span className="text-risk-red font-bold">Invisible</span>
                  </div>
                  <div className="w-full bg-border-gray rounded-full h-2.5">
                    <div className="bg-risk-red h-2.5 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-body-gray font-medium">Reputation Query</span>
                    <span className="text-success-green font-bold">Strong</span>
                  </div>
                  <div className="w-full bg-border-gray rounded-full h-2.5">
                    <div className="bg-success-green h-2.5 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-body-gray font-medium">Company-Specific Query</span>
                    <span className="text-warning-orange font-bold">Weak</span>
                  </div>
                  <div className="w-full bg-border-gray rounded-full h-2.5">
                    <div className="bg-warning-orange h-2.5 rounded-full" style={{ width: '35%' }} />
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border-gray text-center">
                <div className="text-4xl font-bold text-navy">3.2<span className="text-muted-gray text-lg">/5.0</span></div>
                <p className="text-muted-gray text-xs mt-1">Overall AEO Score — Significant improvement opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
