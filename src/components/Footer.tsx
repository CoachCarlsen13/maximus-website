// Footer — Brand footer
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">MAXIMUS</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-blue-300">
                  AI Strategic Advisory
                </span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-sm mb-6">
              Enterprise-grade AI strategic advisory for growing businesses.
              McKinsey depth. SMB pricing. Real results.
            </p>
            <p className="text-blue-300 text-xs italic">
              "Those with the ability have the responsibility to help those who can't help themselves."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Competitive Intelligence Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white text-sm transition-colors">
                  AI Operations Failure Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white text-sm transition-colors">
                  AI Compliance Readiness Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Strategic Partnership
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#framework" className="text-blue-200 hover:text-white text-sm transition-colors">
                  3D Chess Framework
                </a>
              </li>
              <li>
                <a href="#results" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-xs">
            &copy; {currentYear} Maximus AI Strategic Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-blue-300 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-300 hover:text-white text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
