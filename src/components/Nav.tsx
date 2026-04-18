// Navigation bar — minimal, brand-canonical, mobile-friendly
import { useEffect, useState } from 'react';
import { ShieldM } from './ShieldM';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: '#service', label: 'Edge Report' },
    { href: '#in-dev', label: 'In Development' },
    { href: '#why', label: 'Why Maximus' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0E27]/85 backdrop-blur-md border-b border-[#00B4D8]/10' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="Maximus AI home">
          <ShieldM size={36} withHalo={false} />
          <div className="leading-none">
            <div className="font-display text-lg tracking-wide">MAXIMUS AI</div>
            <div className="text-label text-[10px] mt-0.5">Strategic Business Intelligence</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#E0F7FF]/80 hover:text-[#00D4FF] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary cta-pulse">
            Schedule Your Edge Report →
          </a>
        </div>
        <button
          className="md:hidden text-[#E0F7FF] p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#060918]/95 backdrop-blur-lg border-t border-[#00B4D8]/15">
          <div className="container-max flex flex-col gap-2 p-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-[#E0F7FF] hover:text-[#00D4FF] py-3 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 justify-center"
            >
              Schedule Your Edge Report →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
