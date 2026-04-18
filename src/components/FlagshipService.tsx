// Flagship Service — Competitive Edge Report (Config A)
// Copy: VERBATIM from directive 87566ed7 amendment (Joel-approved language).
// Status: PROVEN — flagship eligible for aggressive marketing.

export function FlagshipService() {
  return (
    <section id="service" className="bg-[#0A0E27]">
      <div className="container-max grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="status-pill status-pill-proven mb-6">Proven A+ Flagship</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
            Competitive Edge Report
          </h2>
          <p className="text-lg sm:text-xl text-[#00D4FF] mb-8 italic leading-relaxed font-display">
            "Your competitive position, your AI visibility, your intelligence gaps — mapped,
            measured, proven."
          </p>
          <div className="space-y-3 text-[#E0F7FF]/70 mb-10">
            <ProofMarker text="A+ across 10 sandbox validations" />
            <ProofMarker text="Average score 90/100 under Config A quality gate" />
            <ProofMarker text="5 business day delivery" />
          </div>
          <a href="#contact" className="btn-primary cta-pulse">
            Schedule Your Competitive Edge Report →
          </a>
        </div>
        <div className="glass-card p-8 lg:p-12">
          <div className="text-label mb-4">What you get</div>
          <p className="text-[#E0F7FF] leading-relaxed mb-6">
            The Competitive Edge Report is a comprehensive intelligence audit that shows exactly
            where your business stands against its local competitors in three dimensions:
          </p>
          <div className="space-y-6">
            <Dimension
              title="Competitive Positioning"
              detail="Who is beating you and why. Service breadth, pricing transparency, brand strength, network effects, threat matrix."
            />
            <Dimension
              title="AI Answer-Engine Visibility (AEO)"
              detail="Whether ChatGPT, Claude, Gemini, and Perplexity cite you or your competitors when prospects ask. Ranked by industry-local search terms with measurement methodology."
            />
            <Dimension
              title="Intelligence Gaps"
              detail="The data your competitors have that you don't. Specific, named, prioritized — with the recommended next move for each gap."
            />
          </div>
          <div className="mt-8 pt-6 border-t border-[#00B4D8]/15">
            <div className="text-label mb-2">Davis Honesty guarantee</div>
            <p className="text-sm text-[#E0F7FF]/65 leading-relaxed">
              Every data point is tagged VERIFIED (we confirmed it from a primary source) or
              INFERRED (we extrapolated from architecture or proxy data). No fabricated claims, no
              false-precision. If we don't know, we say so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofMarker({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg width="18" height="18" viewBox="0 0 18 18" className="mt-0.5 flex-shrink-0" aria-hidden>
        <circle cx="9" cy="9" r="8" fill="none" stroke="#00B4D8" strokeWidth="1" />
        <path d="M5 9.5 L8 12.5 L13.5 6.5" fill="none" stroke="#00D4FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-base">{text}</span>
    </div>
  );
}

function Dimension({ title, detail }: { title: string; detail: string }) {
  return (
    <div>
      <div className="font-display text-lg text-white mb-1">{title}</div>
      <p className="text-sm text-[#E0F7FF]/65 leading-relaxed">{detail}</p>
    </div>
  );
}

export default FlagshipService;
