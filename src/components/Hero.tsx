// Hero — Main landing section
// Updated: 2026-03-31 (Day 17 overnight) — Premium redesign: Cormorant Garamond headlines,
//   data-grid background, floating intelligence cards, Apple-level spacing
import { ArrowRight, Shield, TrendingUp, Brain, Eye, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-data-grid">
      {/* Ambient glow spheres */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] bg-dark-blue/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/8 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Hero copy */}
          <div className="max-w-xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.05] backdrop-blur-sm border border-white/[0.10] rounded-full px-4 py-2 mb-10">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse flex-shrink-0" />
              <span className="text-blue-300 text-xs font-medium tracking-wide">Enterprise-Grade AI Strategy for Growing Businesses</span>
            </div>

            {/* Headline — Cormorant editorial style */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 tracking-[-0.01em]">
              Your competitors<br />
              are{' '}
              <span className="italic text-accent-blue">invisible</span>
              {' '}to AI.
              <br />
              <span className="text-white/50 text-4xl md:text-5xl lg:text-6xl">Are you?</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-blue-200/80 max-w-lg mb-10 leading-relaxed font-light">
              When customers ask AI for help, it recommends your competitors — not you.
              Maximus delivers the strategic intelligence and AI systems that put you
              in front of every decision-maker, every time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <a
                href="#contact"
                className="group relative bg-accent-blue text-white px-7 py-4 rounded-xl font-semibold text-base transition-all hover:bg-blue-500 hover:shadow-2xl hover:shadow-accent-blue/30 flex items-center justify-center gap-2.5 pulse-cta overflow-hidden"
              >
                Get Your Free Competitive Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#framework"
                className="border border-white/15 bg-white/[0.04] text-white/80 px-7 py-4 rounded-xl font-medium text-base transition-all hover:bg-white/[0.08] hover:border-white/25 hover:text-white text-center backdrop-blur-sm"
              >
                See How It Works
              </a>
            </div>

            {/* Trust indicators — compact and premium */}
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2.5 text-white/50">
                <Brain size={15} className="text-accent-blue/70" />
                <span className="text-xs tracking-wide">Three-Model AI Orchestration</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50">
                <Lock size={15} className="text-accent-blue/70" />
                <span className="text-xs tracking-wide">Dual Constitution Certified</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50">
                <Shield size={15} className="text-accent-blue/70" />
                <span className="text-xs tracking-wide">McKinsey Depth, SMB Pricing</span>
              </div>
            </div>
          </div>

          {/* Right: Floating intelligence cards */}
          <div className="hidden lg:block relative h-[520px]">
            {/* Primary intel card */}
            <div className="float-card absolute top-8 right-0 w-72 bg-white/[0.05] backdrop-blur-md border border-white/[0.10] rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-blue-300/70 tracking-wider font-medium uppercase">AI Visibility Score</span>
                <Eye size={14} className="text-blue-400/50" />
              </div>
              <div className="font-display text-6xl text-white font-semibold mb-1">3.2<span className="text-2xl text-white/30">/10</span></div>
              <p className="text-xs text-red-400/80 mb-4">Critical gap vs. top competitor</p>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/50">ChatGPT mentions</span>
                    <span className="text-red-400">0 of 5</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full"><div className="h-1.5 bg-red-500/60 rounded-full w-0" /></div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/50">Perplexity citations</span>
                    <span className="text-yellow-400">1 of 5</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full"><div className="h-1.5 bg-yellow-400/60 rounded-full w-[20%]" /></div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/50">Gemini results</span>
                    <span className="text-orange-400">2 of 5</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full"><div className="h-1.5 bg-orange-400/60 rounded-full w-[40%]" /></div>
                </div>
              </div>
            </div>

            {/* Revenue at risk card */}
            <div className="float-card-slow absolute top-52 left-0 w-60 bg-white/[0.05] backdrop-blur-md border border-white/[0.10] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-blue-300/70 tracking-wider font-medium uppercase">Revenue at Risk</span>
                <TrendingUp size={13} className="text-red-400/50" />
              </div>
              <div className="font-display text-4xl text-red-400 font-semibold mb-0.5">$17,600</div>
              <p className="text-[11px] text-white/40 mb-3">estimated monthly impact</p>
              <div className="text-xs text-white/30 italic">
                Based on AI visibility gap × avg. customer LTV
              </div>
            </div>

            {/* Competitor alert card */}
            <div className="absolute bottom-16 right-4 w-64 bg-white/[0.05] backdrop-blur-md border border-accent-blue/20 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs text-blue-300/70 tracking-wider font-medium uppercase">Audit Delivered</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                <span className="text-white font-medium">AlluraMD</span> ranks on 4 of 5 ChatGPT queries.
                You rank on <span className="text-red-400">0</span>.
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-white/30">
                Jupiter, FL market · Competitive Edge Report
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
