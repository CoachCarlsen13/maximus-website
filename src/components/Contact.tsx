// Contact — CTA and contact form
import { useState } from 'react'
import { Send, CheckCircle, ArrowRight, Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // For now, we'll use a simple form submission
    // TODO: Wire to Formspree, SendGrid, or Command Center API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-success-green" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">Request Received</h2>
          <p className="text-muted-gray text-lg">
            We'll be in touch within 24 hours with your competitive intelligence briefing.
            In the meantime, your audit is already being prepared.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: CTA copy */}
          <div>
            <span className="text-accent-blue font-semibold text-sm tracking-wider uppercase">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              Your Free Competitive
              <br />
              Intelligence Audit
            </h2>
            <p className="text-muted-gray text-lg leading-relaxed mb-8">
              Find out exactly where you stand. In 48 hours, you'll receive a comprehensive audit
              showing your competitive position, AI visibility score, revenue at risk,
              and a prioritized action roadmap — completely free.
            </p>

            {/* What you get */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight size={16} className="text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">AI Visibility Score</div>
                  <div className="text-muted-gray text-sm">How visible is your business to AI engines like ChatGPT, Gemini, and Perplexity?</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight size={16} className="text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">Competitor Intelligence</div>
                  <div className="text-muted-gray text-sm">Who's ranking above you, what they're doing right, and where they're vulnerable.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight size={16} className="text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">Revenue at Risk</div>
                  <div className="text-muted-gray text-sm">A dollar figure on what your AI invisibility is costing you every month.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight size={16} className="text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">90-Day Action Roadmap</div>
                  <div className="text-muted-gray text-sm">Prioritized steps to improve your position, ranked by impact and effort.</div>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3 text-muted-gray">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent-blue" />
                <span className="text-sm">joel@maximusai.co</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare size={18} className="text-accent-blue" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-ice-blue rounded-2xl p-8 border border-border-gray">
            <h3 className="text-xl font-bold text-navy mb-6">Request Your Free Audit</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-white text-body-gray focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition"
                  placeholder="Joel Skaggs"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-white text-body-gray focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-white text-body-gray focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition"
                  placeholder="Acme Healthcare"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-white text-body-gray focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition"
                >
                  <option value="">Select your industry</option>
                  <option value="healthcare">Healthcare / Medical</option>
                  <option value="legal">Legal Services</option>
                  <option value="financial">Financial Services</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="hospitality">Hospitality / Restaurant</option>
                  <option value="retail">Retail / E-commerce</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="technology">Technology</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  What's your biggest challenge with AI right now?
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-gray bg-white text-body-gray focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition resize-none"
                  placeholder="Tell us about your situation..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-blue hover:bg-dark-blue text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg"
              >
                <Send size={18} />
                Request Free Audit
              </button>
              <p className="text-xs text-muted-gray text-center">
                No commitment. No credit card. Just intelligence.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
