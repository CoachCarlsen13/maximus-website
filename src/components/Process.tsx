// Process — 4-step engagement flow per directive 87566ed7

const STEPS = [
  {
    n: '01',
    title: '30-min discovery call',
    body:
      'A working call, not a sales call. We confirm fit, scope your competitive situation, and answer every question. If Maximus is not the right call, we say so on the call.',
  },
  {
    n: '02',
    title: 'Competitive Edge Report delivered in 5 business days',
    body:
      'Sandbox-validated audit format. Three dimensions: positioning, AEO visibility, intelligence gaps. Every claim VERIFIED or INFERRED. Delivered as a single PDF + executive deck.',
  },
  {
    n: '03',
    title: 'Review call',
    body:
      '60 minutes walking through findings, prioritizing the next moves, and answering whatever the report surfaces. The point is decisions, not slides.',
  },
  {
    n: '04',
    title: 'Optional ongoing advisory',
    body:
      'If the engagement makes sense, optional continuation via the Maximus Intelligence Platform (MIP) priority waitlist or a custom advisory cadence. No surprises, no auto-renewal traps.',
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#0A0E27]">
      <div className="container-max">
        <div className="text-label mb-3">PROCESS — FOUR STEPS</div>
        <div className="cyan-beam mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-12 max-w-3xl">
          From first call to first decision in <span className="text-[#00D4FF]">about two weeks</span>.
        </h2>
        <ol className="space-y-6 lg:space-y-8">
          {STEPS.map((s) => (
            <li key={s.n} className="glass-card p-6 lg:p-8 grid grid-cols-[auto_1fr] gap-6 items-start">
              <div className="font-mono text-4xl lg:text-5xl text-[#00D4FF] text-glow-cyan leading-none w-16">
                {s.n}
              </div>
              <div>
                <div className="font-display text-xl text-white mb-2">{s.title}</div>
                <p className="text-sm lg:text-base text-[#E0F7FF]/70 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
