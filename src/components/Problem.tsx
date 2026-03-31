// Problem — The market problem Maximus solves
// Updated: 2026-03-31 (Day 17 overnight) — Premium stat card redesign, editorial headline
import { AlertTriangle, DollarSign, TrendingDown, XCircle } from 'lucide-react'

const STATS = [
  {
    icon: XCircle,
    stat: '95%',
    label: 'of enterprise AI pilots deliver zero ROI',
    source: 'MIT NANDA',
    color: 'text-red-400',
    accentColor: 'bg-red-500',
  },
  {
    icon: TrendingDown,
    stat: '80%+',
    label: 'of AI implementation projects fail',
    source: 'RAND Corporation',
    color: 'text-orange-400',
    accentColor: 'bg-orange-400',
  },
  {
    icon: DollarSign,
    stat: '$500K+',
    label: 'minimum engagement at McKinsey or BCG',
    source: 'GSA Federal Rate Cards',
    color: 'text-blue-500',
    accentColor: 'bg-accent-blue',
  },
  {
    icon: AlertTriangle,
    stat: '58%',
    label: 'of Google searches are now zero-click',
    source: 'SparkToro / Datos',
    color: 'text-dark-blue',
    accentColor: 'bg-dark-blue',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-blue font-semibold text-xs tracking-[0.15em] uppercase mb-4 block">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-tight mb-5">
            AI Is Reshaping Every Market.
            <br />
            <span className="text-muted-gray italic font-normal">Most Businesses Are Losing.</span>
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed font-light">
            The businesses winning today aren't just using AI — they're being <em>recommended</em> by AI.
            When a potential customer asks ChatGPT, Gemini, or Perplexity for help, does your business show up?
            For most companies, the answer is no.
          </p>
        </div>

        {/* Stats grid — premium card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {STATS.map(({ icon: Icon, stat, label, source, color, accentColor }) => (
            <div
              key={stat}
              className="group relative bg-white rounded-2xl p-8 border border-border-gray hover:shadow-xl hover:border-accent-blue/20 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${accentColor} opacity-40 group-hover:opacity-80 transition-opacity`} />
              <Icon size={22} className={`${color} mb-5 opacity-60`} />
              <div className={`font-display text-5xl md:text-6xl font-semibold ${color} mb-3 leading-none`}>{stat}</div>
              <p className="text-navy text-sm font-medium leading-snug mb-2">{label}</p>
              <p className="text-muted-gray text-xs italic">{source}</p>
            </div>
          ))}
        </div>

        {/* The gap explanation */}
        <div className="bg-navy rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-5 leading-tight">
                The Consulting Gap
              </h3>
              <p className="text-blue-200/70 leading-relaxed mb-5 font-light">
                Fortune 500 companies spend millions on AI strategy from McKinsey and BCG.
                Growing businesses — the ones that need it most — get left behind.
                They can't afford $1,200/hour consultants. So they guess, cobble together
                free tools, and watch competitors pull ahead.
              </p>
              <p className="text-white font-semibold text-base border-l-2 border-accent-blue pl-4">
                Maximus closes this gap. Enterprise-grade AI strategy at a fraction of the cost.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { name: 'McKinsey', price: '$1,194/hr', width: '95%', color: 'bg-red-500/40' },
                { name: 'BCG', price: '$1,273/hr', width: '100%', color: 'bg-red-500/40' },
                { name: 'Bain', price: '$161K/week', width: '85%', color: 'bg-orange-500/40' },
                { name: 'Maximus', price: '$2,500–$7,500/mo', width: '12%', color: 'bg-success-green', highlight: true },
              ].map(({ name, price, width, color, highlight }) => (
                <div key={name} className={`rounded-xl p-5 ${highlight ? 'bg-accent-blue/15 border border-accent-blue/30' : 'bg-white/[0.06]'}`}>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className={`font-medium text-sm ${highlight ? 'text-white' : 'text-blue-200/70'}`}>{name}</span>
                    <span className={`font-bold text-sm ${highlight ? 'text-accent-blue' : 'text-white'}`}>{price}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className={`${color} h-1.5 rounded-full transition-all`} style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
