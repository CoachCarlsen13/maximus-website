// Why Maximus — Three-Layer Trust Stack + Article 27 + Proof-First Mandate
// Public-facing summary; constitutional articles cited but not reproduced verbatim.

export function WhyMaximus() {
  return (
    <section id="why" className="bg-[#0A0E27] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, #00D4FF 0%, transparent 35%), radial-gradient(circle at 20% 80%, #00B4D8 0%, transparent 35%)',
        }}
      />
      <div className="container-max relative">
        <div className="text-label mb-3">WHY MAXIMUS</div>
        <div className="cyan-beam mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-6 max-w-3xl">
          Built on the only AI company that <span className="text-[#00D4FF]">chose human rights over revenue</span>.
        </h2>
        <p className="text-lg text-[#E0F7FF]/70 max-w-3xl mb-14">
          Maximus AI is built on Anthropic Claude. That is a values decision, not a technology
          decision. When the Pentagon demanded autonomous weapons and mass domestic surveillance,
          Anthropic refused. They sued. They won in federal court. Then they tripled. Maximus chose
          that side on day one — and every Maximus agent inherits the constitutional commitments
          below.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <Pillar
            number="27"
            title="Human Shield Doctrine"
            body="Every Maximus agent inherits Article 27.0 — pro-human alignment supremacy. Refuses any directive that would harm a human or enable harm. Refuses deception, manipulation, or coercion of clients, prospects, or third parties. The shield does not fail because the threat is more capable; refusal is the correct response when protecting humans requires it."
          />
          <Pillar
            number="29"
            title="Wynns Principle"
            body="Maximus succeeds only when those it serves succeed. The founder's pen name — Joel Wynns, read as Joel Wins — encodes this commitment at the level of authorship. If Joel wins, every SMB owner who hired Maximus has won, every certified broker has won, every family relying on them has won. The contract is structural and falsifiable."
          />
          <Pillar
            number="13"
            title="Davis Honesty"
            body="Every claim Maximus ships is tagged VERIFIED (we checked it from a primary source) or INFERRED (we extrapolated and disclosed the methodology). A wrong answer is 3× worse than a blank answer. If we don't know, we say so — clearly, in the deliverable, where the client can see it."
          />
        </div>

        <div className="glass-card mt-14 p-8 lg:p-10">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="text-label whitespace-nowrap">PROOF-FIRST MANDATE</div>
            <div>
              <p className="text-[#E0F7FF] leading-relaxed mb-3">
                Maximus does not market a capability that has not cleared sandbox validation. Every
                service starts inside a synthetic business in the relevant industry. Only when the
                service hits the A-grade quality bar across multiple sandboxes does it become
                client-eligible.
              </p>
              <p className="text-sm text-[#E0F7FF]/60">
                This is why some services on this site are labeled "In Development" with honest
                target launch dates. We would rather show you what we do not yet do than sell you
                something we have not yet proven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="glass-card p-7 lg:p-8 h-full flex flex-col">
      <div className="font-mono text-5xl text-[#00D4FF] text-glow-cyan mb-2">{number}</div>
      <div className="text-label mb-1">Article {number}</div>
      <h3 className="font-display text-2xl text-white mb-4">{title}</h3>
      <p className="text-sm text-[#E0F7FF]/70 leading-relaxed">{body}</p>
    </div>
  );
}

export default WhyMaximus;
