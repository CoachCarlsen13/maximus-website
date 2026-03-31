// Framework — The 3D Chess methodology
// Updated: 2026-03-31 (Day 17 overnight) — Premium redesign, editorial typography
import { Layers, Zap, Target, ArrowRight } from 'lucide-react'

export default function Framework() {
  return (
    <section id="framework" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-blue font-semibold text-xs tracking-[0.15em] uppercase mb-4 block">Our Approach</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy leading-tight mb-5">
            The 3D Chess Framework
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed font-light">
            Most consultants play checkers — inserting AI into existing workflows one tool at a time.
            We play chess in three dimensions, redesigning your entire business intelligence
            architecture using AI's native capabilities.
          </p>
        </div>

        {/* 2D vs 3D comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* 2D - What others do */}
          <div className="bg-white rounded-2xl p-8 border border-border-gray relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-400 opacity-40" />
            <div className="inline-flex items-center gap-2 bg-red-50 text-risk-red px-3 py-1.5 rounded-lg text-xs font-semibold mb-6">
              <Layers size={14} />
              What Most Consultants Do
            </div>
            <h3 className="font-display text-2xl font-semibold text-body-gray mb-5">
              2D Thinking — Playing Checkers
            </h3>
            <ul className="space-y-3.5">
              {[
                'Add a chatbot to your website',
                'Automate one department at a time',
                'Bolt AI onto broken processes',
                'Pick a single AI vendor and hope for the best',
                'Generic recommendations with no competitive context',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-gray text-sm">
                  <span className="text-risk-red mt-0.5 flex-shrink-0 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-risk-red text-sm font-medium leading-snug">
                Result: 80%+ implementation failure rate. $30–40B wasted on AI projects that deliver zero ROI.
              </p>
            </div>
          </div>

          {/* 3D - What Maximus does */}
          <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-blue opacity-50" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-accent-blue/15 text-accent-blue px-3 py-1.5 rounded-lg text-xs font-semibold mb-6">
                <Target size={14} />
                The Maximus Approach
              </div>
              <h3 className="font-display text-2xl font-semibold mb-5">
                3D Chess — Full System Redesign
              </h3>
              <ul className="space-y-3.5">
                {[
                  'Map your entire competitive landscape with multi-model AI',
                  'Quantify exactly how much revenue you\'re losing — and to whom',
                  'Design AI-native workflows that connect every function',
                  'Orchestrate the right AI model for each task — not one tool for everything',
                  'Ongoing competitive intelligence and strategic positioning',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-blue-100/80 text-sm">
                    <span className="text-success-green mt-0.5 flex-shrink-0 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
                <p className="text-accent-blue text-sm font-medium leading-snug">
                  Result: Strategic clarity, competitive advantage, and quantified ROI from day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three-model orchestration */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-border-gray">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy mb-3">
              Three-Model AI Orchestration
            </h3>
            <p className="text-muted-gray max-w-2xl mx-auto font-light">
              No single AI is best at everything. Our proprietary system routes each task to the model
              that excels at it — then synthesizes the results into one intelligence product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 relative">
            {[
              {
                color: 'bg-dark-blue',
                icon: Zap,
                title: 'Verify',
                desc: 'Deep research verifies every fact, identifies primary sources, and assesses confidence levels. No unverified claims reach your report.',
              },
              {
                color: 'bg-accent-blue',
                icon: Target,
                title: 'Analyze',
                desc: 'Professional analysis delivers comprehensive business assessment, competitive positioning, and strategic recommendations.',
              },
              {
                color: 'bg-navy',
                icon: Layers,
                title: 'Synthesize',
                desc: 'Strategic synthesis merges verified facts with business analysis into one unified intelligence product — accurate AND actionable.',
              },
            ].map(({ color, icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-7 rounded-xl bg-[#F7F9FC] hover:bg-light-blue transition-colors group">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h4 className="font-display text-xl font-semibold text-navy mb-3">{title}</h4>
                <p className="text-sm text-muted-gray leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2.5 bg-light-blue px-6 py-3 rounded-full">
              <ArrowRight size={14} className="text-accent-blue" />
              <span className="text-navy font-medium text-sm">Every Maximus deliverable passes through all three models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
