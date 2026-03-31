// About — Joel's credibility and Maximus story
// Updated: 2026-03-31 (Day 17 overnight) — SMB messaging added, Dual-Constitution badge,
//   premium design upgrade, Cormorant headlines
import { Award, Building2, BookOpen, Users } from 'lucide-react'
import DualConstitution from './DualConstitution'

const CREDENTIALS = [
  {
    icon: Building2,
    title: 'CCG Senior Consultant',
    description:
      'AI strategy lead at America\'s largest independent telecom consulting firm, serving HOA and COA boards nationwide.',
  },
  {
    icon: Award,
    title: 'System Builder',
    description:
      'Built the Maximus intelligence platform from the ground up — 12-agent autonomous system with three-model AI orchestration.',
  },
  {
    icon: BookOpen,
    title: 'Author',
    description:
      'Writing "The Agent Revolution" — a data-driven book on AI\'s transformative impact on business and the professional workforce.',
  },
  {
    icon: Users,
    title: 'Broker Network Architect',
    description:
      'Designed a scalable advisory network that deploys enterprise-grade AI strategy into any business, any vertical.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <span className="text-accent-blue font-semibold text-xs tracking-[0.15em] uppercase mb-4 block">About Maximus</span>
            <h2 className="font-display text-4xl md:text-4xl font-semibold text-navy leading-tight mb-6">
              Built by a Practitioner.
              <br />
              <span className="italic font-normal text-muted-gray">Not a Theorist.</span>
            </h2>
            <div className="space-y-4 text-muted-gray leading-relaxed font-light">
              <p>
                Maximus AI Strategic Advisory was born from a simple observation: the businesses
                that need AI strategy the most — <strong className="text-navy font-semibold">small and mid-size businesses</strong> — are
                the ones that can afford it the least.
              </p>
              <p>
                McKinsey charges $1,200/hour. BCG starts at half a million dollars. And the "AI consultants"
                on YouTube? They teach fragments. They've never built a full system. They sell courses,
                not outcomes.
              </p>
              <p>
                <strong className="text-navy font-semibold">Joel Skaggs built the entire system.</strong> A 12-agent autonomous
                intelligence platform. Three-model AI orchestration. Automated competitive audits that deliver
                in minutes what consulting firms take weeks to produce. An always-on Agent Director that
                identifies opportunities 24/7.
              </p>
              <p>
                He didn't build it to teach it. He built it to deploy it — into real SMBs,
                generating real revenue, solving real competitive problems. The system you see in action is the
                same one running Maximus operations right now.
              </p>
            </div>

            {/* SMB positioning callout */}
            <div className="mt-8 p-5 bg-white border border-border-gray rounded-xl">
              <p className="text-sm font-semibold text-navy mb-1">Built for growing businesses — not just enterprise</p>
              <p className="text-sm text-muted-gray leading-relaxed">
                Every Maximus product is priced and scoped for businesses with 5–500 employees. You get
                the intelligence McKinsey would charge millions for, delivered at a fraction of the cost —
                because you shouldn't need a Fortune 500 budget to compete in the AI era.
              </p>
            </div>

            {/* Dual Constitution compact badge */}
            <div className="mt-6">
              <DualConstitution variant="compact" />
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="space-y-4">
            {CREDENTIALS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-border-gray hover:shadow-md hover:border-accent-blue/20 transition-all flex items-start gap-5 group"
              >
                <div className="w-11 h-11 bg-light-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/10 transition-colors">
                  <Icon size={22} className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1.5 text-sm">{title}</h4>
                  <p className="text-muted-gray text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 bg-navy rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-blue/6 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="font-display text-5xl text-accent-blue/30 mb-4 leading-none">"</div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-5">
              The Maximus Mission
            </h3>
            <p className="text-blue-200/70 text-lg leading-relaxed font-light">
              Those with the ability have the responsibility to help those who can't help themselves.
              Every dollar Maximus generates fuels our capacity to deploy enterprise-grade intelligence
              into businesses that would otherwise be left behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
