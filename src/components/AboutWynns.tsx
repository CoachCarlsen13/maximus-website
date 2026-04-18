// About — opens with the Wynns Doctrine as origin story per directive 87566ed7
// + brand canon row 9c1f2e14. Uses public pen name Joel Wynns. References founder
// son namesake (United States Marine Military Police) per joel-ceo-identity + brand skill.
// Davis Honesty: dual-identity disclosed transparently per Article 29 doctrine.

export function AboutWynns() {
  return (
    <section id="about" className="bg-[#060918]">
      <div className="container-max">
        <div className="text-label mb-3">ABOUT — THE WYNNS DOCTRINE</div>
        <div className="cyan-beam mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-10 max-w-3xl leading-[1.1]">
          The pen name is the contract.
        </h2>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-6 text-[#E0F7FF]/85 leading-relaxed">
            <blockquote className="border-l-2 border-[#00B4D8] pl-6 py-2 text-xl font-display text-[#00D4FF] italic">
              "Joel Wynns... because if Joel actually wins, that means Maximus SMBs, SMB owners,
              Maximus brokers and their families... have already won."
            </blockquote>
            <p className="text-sm text-[#E0F7FF]/55 italic">
              — Joel Wynns, founding articulation 2026-04-18 (Article 29 of the Maximus Constitution)
            </p>

            <p>
              Joel Wynns is the public pen name of the founder of Maximus AI. Read aloud, the name
              is <em>Joel Wins</em>. The compression is intentional. Every book, every briefing,
              every report attributed to Joel Wynns is a simultaneous declaration: if this name
              wins, every SMB owner who hired Maximus has won, every broker certified under Maximus
              has won, every family relying on those owners and brokers has won.
            </p>
            <p>
              Joel cannot win alone. Joel wins only when the chain wins. The contract is
              falsifiable: if Joel succeeds materially while the people Maximus serves do not
              succeed, the principle is a lie and Maximus is discredited. That is the point. That
              is the safeguard.
            </p>
            <p>
              Maximus AI is named after Joel's son, a United States Marine Military Police. The
              shield in the brand mark is the protection doctrine made visual. The principle that
              motivated the entire company is inscribed in the constitution:{' '}
              <em className="text-[#00D4FF] not-italic">
                "Those who have the ability have the responsibility to help and protect those who
                cannot help and protect themselves."
              </em>
            </p>
            <p>
              The dual-identity disclosure: internal Command Center documentation, agent
              architecture, and family context use the founder's base name. Every public-facing
              surface — books, bylines, this website, certifications — uses Joel Wynns. The
              difference is not concealment. It is intentional encoding of the mission at the level
              of authorship. When a reader sees Joel Wynns on the cover, the reader is meant to ask
              what the name is doing there, and to learn that the name is the contract.
            </p>
          </div>

          <aside className="glass-card p-7 lg:p-9">
            <div className="text-label mb-4">FOUNDER FILE</div>
            <dl className="space-y-5">
              <Row label="Public name" value="Joel Wynns" mono />
              <Row label="Title" value="Founder, Maximus AI Strategic Advisory" />
              <Row label="Based" value="Jupiter, Florida" />
              <Row label="Constitutional anchor" value="Article 29 — Wynns Principle" />
              <Row label="Operating doctrine" value="Article 27 — Human Shield" />
              <Row label="Brand mark" value="Shield M (per brand identity skill)" />
              <Row
                label="Why "
                value={
                  <span>
                    "If we win, you win" is the moat that cannot be copied without conceding the
                    frame.
                  </span>
                }
              />
            </dl>
            <div className="mt-8 pt-6 border-t border-[#00B4D8]/15">
              <p className="text-xs text-[#E0F7FF]/55 leading-relaxed">
                Sources: <code className="font-mono">maximus_constitution.article_number=29</code>;
                brand canon <code className="font-mono">intelligence_documents</code> row{' '}
                <code className="font-mono break-all">9c1f2e14</code>; Joel CEO identity{' '}
                <code className="font-mono">server/data/joel-ceo-identity.md</code>.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, mono = false }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-[#00B4D8] mb-1">{label}</dt>
      <dd className={`text-base text-[#E0F7FF] ${mono ? 'font-mono' : ''}`}>{value}</dd>
    </div>
  );
}

export default AboutWynns;
