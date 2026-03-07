// Hero — Main landing section
import { ArrowRight, Shield, TrendingUp, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center animated-gradient overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-dark-blue/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse" />
            <span className="text-blue-100 text-sm font-medium">Enterprise-Grade AI Strategy for Growing Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your competitors are{' '}
            <span className="text-accent-blue">invisible</span>{' '}
            to AI.
            <br />
            <span className="text-blue-200">Are you?</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
            When customers ask AI for help, it recommends your competitors — not you.
            Maximus delivers the strategic intelligence and AI systems that put you
            in front of every decision-maker, every time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="group bg-white text-navy px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-accent-blue/20 flex items-center justify-center gap-2 pulse-cta"
            >
              Get Your Free Competitive Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#framework"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/50 text-center"
            >
              See How It Works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain size={22} className="text-accent-blue" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Three-Model AI</div>
                <div className="text-xs text-blue-200">Gemini + GPT-5.4 + Claude</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={22} className="text-accent-blue" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Enterprise Grade</div>
                <div className="text-xs text-blue-200">McKinsey depth, SMB pricing</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp size={22} className="text-accent-blue" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Revenue Impact</div>
                <div className="text-xs text-blue-200">Quantified ROI from day one</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
