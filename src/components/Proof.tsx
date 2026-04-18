// Proof — verified sandbox results, every number from sandbox_service_coverage table.
// Davis Honesty: only the 10 completed A-grade businesses shown; the 11th (Palm Beach,
// completed_run_count=0) is honestly excluded as not-yet-validated.
// Source: sandbox_service_coverage Supabase view 2026-04-18.

const SANDBOX_DATA = [
  { name: 'SunCoast Air & Heat Solutions', industry: 'HVAC', state: 'FL', score: 93 },
  { name: 'Sunshine HOA Management', industry: 'HOA Property Management', state: 'FL', score: 93 },
  { name: 'Pinnacle Risk & Insurance Advisors', industry: 'Insurance Broker', state: 'FL', score: 91 },
  { name: 'Miami Beach Laser & Skin Center', industry: 'Medical Spa', state: 'FL', score: 90 },
  { name: 'Lumina Aesthetics & Wellness', industry: 'Medical Spa', state: 'FL', score: 90 },
  { name: 'Treasure Coast Realty Group', industry: 'Real Estate', state: 'FL', score: 90 },
  { name: 'Stuart Spine & Wellness Chiropractic', industry: 'Chiropractic', state: 'FL', score: 90 },
  { name: 'Coastal Smiles Cosmetic Dentistry', industry: 'Cosmetic Dentistry', state: 'FL', score: 88 },
  { name: 'Scottsdale Premier Smiles', industry: 'Cosmetic Dentistry', state: 'AZ', score: 88 },
  { name: 'CCG Telecom Consulting MHC', industry: 'MHC Telecom Consulting', state: 'FL', score: 88 },
];

export function Proof() {
  return (
    <section id="proof" className="bg-[#060918]">
      <div className="container-max">
        <div className="text-label mb-3">PROOF — A+ ACROSS 10 SANDBOX VALIDATIONS</div>
        <div className="cyan-beam mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 max-w-3xl">
          A-grade across 10 sandbox validations <span className="text-[#00D4FF]">before we'd sell it to you.</span>
        </h2>
        <p className="text-lg text-[#E0F7FF]/70 max-w-3xl mb-12">
          Every Maximus service is sandbox-validated against a synthetic business in the relevant
          industry before any paying client touches it. The Competitive Edge Report cleared the
          A-grade bar on 10 of 10 completed sandboxes, with an average score of 90/100. Each row
          below is a real Config A audit run logged in the Maximus Command Center.
        </p>

        <div className="overflow-x-auto glass-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#00B4D8]/15">
                <th className="px-6 py-4 font-display text-[#00B4D8] uppercase text-xs tracking-wider">Sandbox Business</th>
                <th className="px-6 py-4 font-display text-[#00B4D8] uppercase text-xs tracking-wider">Industry</th>
                <th className="px-6 py-4 font-display text-[#00B4D8] uppercase text-xs tracking-wider">State</th>
                <th className="px-6 py-4 font-display text-[#00B4D8] uppercase text-xs tracking-wider text-right">Score</th>
                <th className="px-6 py-4 font-display text-[#00B4D8] uppercase text-xs tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody>
              {SANDBOX_DATA.map((row, i) => (
                <tr
                  key={row.name}
                  className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.015]' : ''}`}
                >
                  <td className="px-6 py-4 text-[#E0F7FF]">{row.name}</td>
                  <td className="px-6 py-4 text-[#E0F7FF]/70">{row.industry}</td>
                  <td className="px-6 py-4 font-mono text-[#E0F7FF]/70">{row.state}</td>
                  <td className="px-6 py-4 font-mono text-[#00D4FF] text-right">{row.score}</td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs px-2 py-1 rounded bg-[#00D4FF]/15 text-[#00D4FF]">A</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#E0F7FF]/55 mt-6 max-w-3xl">
          Source: <code className="font-mono text-xs">sandbox_service_coverage</code> view, Maximus
          Command Center Supabase, snapshot 2026-04-18. Davis Honesty disclosure: an 11th sandbox
          (Palm Beach Aesthetics & Wellness) is in queue but has not yet completed a scored run; it
          is honestly excluded from this table until it does. Average above is across the 10
          completed audits only.
        </p>
      </div>
    </section>
  );
}

export default Proof;
