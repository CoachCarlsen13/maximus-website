// Hero — brand anchor verbatim per directive 87566ed7 + Article 29 enacted
// "The world's first AI Business Intelligence system you can TRUST"
// Visual element: Shield M (per brand skill — Alpha Knight conflict resolved
// via directive escalation rule, see completion row).
import { ShieldM } from './ShieldM';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center overflow-hidden hex-grid"
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, #111633 0%, #0A0E27 50%, #060918 100%)',
      }}
    >
      {/* Horizontal cyan light beam — signature element */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[55%] h-[2px] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.0) 8%, rgba(0,212,255,0.95) 50%, rgba(0,212,255,0.0) 92%, transparent 100%)',
          boxShadow: '0 0 32px 6px rgba(0,180,216,0.35)',
        }}
      />

      <div className="container-max grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center relative z-10 pt-20">
        <div>
          <div className="text-label mb-6">Strategic Business Intelligence • Jupiter, FL</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-8 text-white">
            The world's first AI Business Intelligence system you can{' '}
            <span className="text-gradient-cyan text-glow-cyan">TRUST</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#E0F7FF]/75 leading-relaxed mb-10 max-w-2xl">
            Sandbox-validated at A-grade across 10 businesses before we opened it to paying clients.
            Every claim VERIFIED or INFERRED. Every agent inherits Article 27 (Human Shield Doctrine)
            and Article 29 (the Wynns Principle): Maximus succeeds only when those it serves succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="#contact" className="btn-primary cta-pulse">
              Schedule Your Competitive Edge Report →
            </a>
            <a href="#service" className="btn-secondary">
              See the proof
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <Stat value="10/10" label="A-grade sandboxes" />
            <Stat value="90" label="avg score / 100" />
            <Stat value="5d" label="delivery" />
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <ShieldM size={320} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-3xl text-[#00D4FF] text-glow-cyan">{value}</div>
      <div className="text-xs uppercase tracking-wider text-[#E0F7FF]/60 mt-1">{label}</div>
    </div>
  );
}

export default Hero;
