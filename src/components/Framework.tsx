// Framework — The 3D Chess methodology
import { Layers, Zap, Target, ArrowRight } from 'lucide-react'

export default function Framework() {
  return (
    <section id="framework" className="py-24 md:py-32 bg-ice-blue">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">Our Approach</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-6">
            The 3D Chess Framework
          </h2>
          <p className="text-lg text-muted-gray leading-relaxed">
            Most consultants play checkers — inserting AI into existing workflows one tool at a time.
            We play chess in three dimensions, redesigning your entire business intelligence
            architecture using AI's native capabilities.
          </p>
        </div>

        {/* 2D vs 3D comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* 2D - What others do */}
          <div className="bg-white rounded-2xl p-8 border border-border-gray">
            <div className="inline-flex items-center gap-2 bg-red-50 text-risk-red px-4 py-2 rounded-lg text-sm font-semibold mb-6">
              <Layers size={16} />
              What Most Consultants Do
            </div>
            <h3 className="text-2xl font-bold text-body-gray mb-4">
              2D Thinking — Playing Checkers
            </h3>
            <ul className="space-y-4 text-muted-gray">
              <li className="flex items-start gap-3">
                <span className="text-risk-red mt-1 flex-shrink-0">✕</span>
                <span>Add a chatbot to your website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-risk-red mt-1 flex-shrink-0">✕</span>
                <span>Automate one department at a time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-risk-red mt-1 flex-shrink-0">✕</span>
                <span>Bolt AI onto broken processes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-risk-red mt-1 flex-shrink-0">✕</span>
                <span>Pick a single AI vendor and hope for the best</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-risk-red mt-1 flex-shrink-0">✕</span>
                <span>Generic recommendations with no competitive context</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-risk-red text-sm font-medium">
                Result: 80%+ implementation failure rate. $30-40B wasted on AI projects that deliver zero ROI.
              </p>
            </div>
          </div>

          {/* 3D - What Maximus does */}
          <div className="bg-navy rounded-2xl p-8 text-white border-2 border-accent-blue/30">
            <div className="inline-flex items-center gap-2 bg-accent-blue/20 text-accent-blue px-4 py-2 rounded-lg text-sm font-semibold mb-6">
              <Target size={16} />
              The Maximus Approach
            </div>
            <h3 className="text-2xl font-bold mb-4">
              3D Chess — Full System Redesign
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="text-success-green mt-1 flex-shrink-0">✓</span>
                <span>Map your entire competitive landscape with multi-model AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success-green mt-1 flex-shrink-0">✓</span>
                <span>Quantify exactly how much revenue you're losing — and to whom</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success-green mt-1 flex-shrink-0">✓</span>
                <span>Design AI-native workflows that connect every function</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success-green mt-1 flex-shrink-0">✓</span>
                <span>Orchestrate the right AI model for each task — not one tool for everything</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success-green mt-1 flex-shrink-0">✓</span>
                <span>Ongoing competitive intelligence and strategic positioning</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
              <p className="text-accent-blue text-sm font-medium">
                Result: Strategic clarity, competitive advantage, and quantified ROI from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Three-model orchestration */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-border-gray">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Three-Model AI Orchestration
            </h3>
            <p className="text-muted-gray max-w-2xl mx-auto">
              No single AI is best at everything. Our proprietary system routes each task to the model
              that excels at it — then synthesizes the results into one intelligence product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Gemini */}
            <div className="text-center p-6 rounded-xl bg-ice-blue">
              <div className="w-16 h-16 bg-dark-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">Verify</h4>
              <p className="text-sm text-muted-gray">
                Deep research engine verifies every fact, identifies primary sources, and assesses
                confidence levels. No unverified claims reach your report.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-center p-6 rounded-xl bg-ice-blue w-full">
                <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Analyze</h4>
                <p className="text-sm text-muted-gray">
                  Professional analysis engine delivers comprehensive business assessment,
                  competitive positioning, and strategic recommendations.
                </p>
              </div>
            </div>
            {/* Mobile version */}
            <div className="md:hidden text-center p-6 rounded-xl bg-ice-blue">
              <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">Analyze</h4>
              <p className="text-sm text-muted-gray">
                Professional analysis engine delivers comprehensive business assessment,
                competitive positioning, and strategic recommendations.
              </p>
            </div>

            {/* Claude */}
            <div className="text-center p-6 rounded-xl bg-ice-blue">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">Synthesize</h4>
              <p className="text-sm text-muted-gray">
                Strategic synthesis engine merges verified facts with business analysis into one
                unified intelligence product — accurate AND actionable.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-3 bg-light-blue px-6 py-3 rounded-full">
              <ArrowRight size={16} className="text-accent-blue" />
              <span className="text-navy font-medium text-sm">
                Every Maximus deliverable passes through all three models
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
