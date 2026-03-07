// Problem — The market problem Maximus solves
import { AlertTriangle, DollarSign, TrendingDown, XCircle } from 'lucide-react'

const STATS = [
  {
    icon: XCircle,
    stat: '95%',
    label: 'of enterprise AI pilots deliver zero ROI',
    source: 'MIT NANDA',
    color: 'text-risk-red',
    bgColor: 'bg-red-50',
  },
  {
    icon: TrendingDown,
    stat: '80%+',
    label: 'of AI implementation projects fail',
    source: 'RAND Corporation',
    color: 'text-warning-orange',
    bgColor: 'bg-orange-50',
  },
  {
    icon: DollarSign,
    stat: '$500K+',
    label: 'minimum engagement at McKinsey or BCG',
    source: 'GSA Federal Rate Cards',
    color: 'text-navy',
    bgColor: 'bg-light-blue',
  },
  {
    icon: AlertTriangle,
    stat: '58%',
    label: 'of Google searches are now zero-click',
    source: 'SparkToro / Datos',
    color: 'text-dark-blue',
    bgColor: 'bg-blue-50',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-6">
            AI Is Reshaping Every Market.
            <br />
            <span className="text-muted-gray">Most Businesses Are Losing.</span>
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed">
            The businesses winning today aren't just using AI — they're being <em>recommended</em> by AI.
            When a potential customer asks ChatGPT, Gemini, or Perplexity for help, does your business show up?
            For most companies, the answer is no.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map(({ icon: Icon, stat, label, source, color, bgColor }) => (
            <div
              key={stat}
              className={`${bgColor} rounded-2xl p-8 text-center border border-border-gray/50 hover:shadow-lg transition-shadow`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${bgColor} mb-4`}>
                <Icon size={28} className={color} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${color} mb-2`}>{stat}</div>
              <p className="text-body-gray text-sm font-medium mb-2">{label}</p>
              <p className="text-muted-gray text-xs italic">{source}</p>
            </div>
          ))}
        </div>

        {/* The gap explanation */}
        <div className="bg-navy rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Consulting Gap
              </h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                Fortune 500 companies spend millions on AI strategy from McKinsey and BCG.
                Growing businesses — the ones that need it most — get left behind.
                They can't afford $1,200/hour consultants. So they guess, cobble together
                free tools, and watch competitors pull ahead.
              </p>
              <p className="text-white font-semibold text-lg">
                Maximus closes this gap. Enterprise-grade AI strategy at a fraction of the cost.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-200 font-medium">McKinsey</span>
                  <span className="text-white font-bold">$1,194/hr</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-risk-red/80 h-3 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-200 font-medium">BCG</span>
                  <span className="text-white font-bold">$1,273/hr</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-risk-red/80 h-3 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-200 font-medium">Bain</span>
                  <span className="text-white font-bold">$161K/week</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-warning-orange/80 h-3 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="bg-accent-blue/20 border border-accent-blue/40 rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Maximus</span>
                  <span className="text-accent-blue font-bold text-lg">$2,500-$7,500/mo</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-success-green h-3 rounded-full" style={{ width: '12%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
