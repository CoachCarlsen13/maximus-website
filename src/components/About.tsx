// About — Joel's credibility and Maximus story
import { Award, Building2, BookOpen, Users } from 'lucide-react'

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
    <section id="about" className="py-24 md:py-32 bg-ice-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">About Maximus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              Built by a Practitioner.
              <br />
              Not a Theorist.
            </h2>
            <div className="space-y-4 text-muted-gray leading-relaxed">
              <p>
                Maximus AI Strategic Advisory was born from a simple observation: the businesses
                that need AI strategy the most are the ones that can afford it the least.
              </p>
              <p>
                McKinsey charges $1,200/hour. BCG starts at half a million dollars. And the "AI consultants"
                on YouTube? They teach fragments. They've never built a full system. They sell courses,
                not outcomes.
              </p>
              <p>
                <strong className="text-navy">Joel Skaggs built the entire system.</strong> A 12-agent autonomous
                intelligence platform. Three-model AI orchestration. Automated competitive audits that deliver
                in minutes what consulting firms take weeks to produce. An always-on Agent Director that
                identifies opportunities 24/7.
              </p>
              <p>
                He didn't build it to teach it. He built it to deploy it — into real businesses,
                generating real revenue, solving real problems. The system you see in action is the
                same one running Maximus operations right now.
              </p>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="space-y-6">
            {CREDENTIALS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-border-gray hover:shadow-md transition-shadow flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">{title}</h4>
                  <p className="text-muted-gray text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 bg-navy rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Maximus Mission
            </h3>
            <p className="text-blue-200 text-lg leading-relaxed">
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
