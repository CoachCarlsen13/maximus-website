// DualConstitution — Ethical AI commitment section
// Created: 2026-03-31 (Day 17 overnight) — Added to homepage, services, about
// The Dual Constitution is the ethical operating charter for all Maximus AI outputs.
// Two layers: Anthropic Foundation (model-level) + Maximus Integrity Mandate (8 rules)
import { Shield, AlertTriangle, Eye, Lock, Users, Scale, Zap, Heart } from 'lucide-react'

const RULES = [
  { icon: AlertTriangle, title: 'No Deception', desc: 'We never fabricate, mislead, or invent data — verified or clearly marked inferred.' },
  { icon: Zap, title: 'No Manipulation', desc: 'No manufactured urgency, false scarcity, or dark patterns — ever.' },
  { icon: Lock, title: 'Privacy by Default', desc: 'Collect only what\'s needed. Share only with your explicit consent.' },
  { icon: Eye, title: 'AI Transparency', desc: 'We never misrepresent AI output as human where it matters.' },
  { icon: Shield, title: 'No Third-Party Harm', desc: 'Competitive intelligence, not weaponization. We help you compete, not attack.' },
  { icon: Users, title: 'Human Authority', desc: 'AI advises. You decide. No critical decision is automated without your oversight.' },
  { icon: Scale, title: 'Errors Disclosed', desc: 'Mistakes surface immediately — no minimizing, no hiding. The shield means something.' },
  { icon: Heart, title: 'No Conflicts', desc: 'No undisclosed relationships influencing our recommendations. Ever.' },
]

interface DualConstitutionProps {
  variant?: 'full' | 'compact'
}

export default function DualConstitution({ variant = 'full' }: DualConstitutionProps) {
  if (variant === 'compact') {
    return (
      <div className="constitution-card relative bg-navy/40 border border-accent-blue/20 rounded-2xl p-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent-blue/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield size={20} className="text-accent-blue" />
          </div>
          <div>
            <h4 className="font-semibold text-navy mb-1 text-sm">Dual Constitution Certified</h4>
            <p className="text-xs text-muted-gray leading-relaxed">
              Every Maximus output operates under two non-negotiable frameworks: Anthropic's foundation model
              constraints and our 8-rule Maximus Integrity Mandate — no deception, no manipulation,
              human authority over every critical decision.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Background data grid */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,125,216,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,125,216,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-blue/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-4 py-1.5 mb-6">
            <Shield size={13} className="text-accent-blue" />
            <span className="text-accent-blue text-xs font-semibold tracking-wider uppercase">Ethical AI Commitment</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-5">
            The Dual Constitution
          </h2>
          <p className="text-blue-200/70 text-lg leading-relaxed font-light">
            Every Maximus AI output — every audit, every recommendation, every report — operates
            under two constitutions simultaneously. Non-negotiable. Fully transparent.
          </p>
        </div>

        {/* Two constitutions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Constitution I */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white/60 text-xs font-bold">I</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Anthropic Foundation</h3>
                <p className="text-blue-300/50 text-xs">Model-level · Cannot be overridden</p>
              </div>
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Claude (the AI powering Maximus) will refuse to assist with: violence against individuals,
              mass deception, non-consensual surveillance, undermining democratic institutions,
              or weaponization of AI against civilians. These constraints exist at the model level —
              no prompt, no client, no business context can override them.
            </p>
          </div>

          {/* Constitution II */}
          <div className="bg-accent-blue/[0.06] border border-accent-blue/20 rounded-2xl p-8 constitution-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent-blue text-xs font-bold">II</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Maximus Integrity Mandate</h3>
                <p className="text-accent-blue/60 text-xs">8 rules · Joel-level · Equally non-negotiable</p>
              </div>
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Built on top of Anthropic's foundation: 8 additional rules that govern every client interaction,
              every AI output, every competitive recommendation. These reflect what we believe responsible
              AI advisory looks like — and what we'd want if we were the client.
            </p>
          </div>
        </div>

        {/* 8 Rules grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {RULES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.06] hover:border-accent-blue/20 transition-all group"
            >
              <Icon size={16} className="text-accent-blue/60 mb-3 group-hover:text-accent-blue transition-colors" />
              <h4 className="text-white/90 text-sm font-semibold mb-1.5">{title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Decision test */}
        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto">
          <p className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-4">Every Decision Test</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <span className="text-white/60">Violates Anthropic's rules?</span>
            <span className="text-white/20">→</span>
            <span className="text-white/60">Violates the 8 rules?</span>
            <span className="text-white/20">→</span>
            <span className="text-white/80 font-medium">Would Maximus be proud?</span>
          </div>
          <p className="text-white/30 text-xs mt-3 italic">Named for Joel's son — US Marine MP. The shield means something.</p>
        </div>
      </div>
    </section>
  )
}
