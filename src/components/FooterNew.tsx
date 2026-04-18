// Legal Footer — privacy + terms + Article 27/29 public summaries
import { ShieldM } from './ShieldM';

export function FooterNew() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#060918] border-t border-[#00B4D8]/10">
      <div className="container-max px-6 md:px-12 py-16 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ShieldM size={48} withHalo={false} />
            <div className="leading-tight">
              <div className="font-display text-lg text-white">MAXIMUS AI</div>
              <div className="text-label text-[10px]">Strategic Business Intelligence</div>
            </div>
          </div>
          <p className="text-sm text-[#E0F7FF]/55 leading-relaxed mb-6 max-w-md">
            The world's first AI Business Intelligence system you can TRUST. Sandbox-validated
            A-grade quality. Every claim VERIFIED or INFERRED. Built on Anthropic Claude — chose
            human rights over revenue.
          </p>
          <p className="text-xs font-mono text-[#E0F7FF]/40">
            Joel Wynns, Founder · Jupiter, FL · joel@maximusintel.com
          </p>
        </div>

        <FooterCol
          title="Services"
          items={[
            { label: 'Competitive Edge Report', href: '#service' },
            { label: 'In Development', href: '#in-dev' },
          ]}
        />
        <FooterCol
          title="Constitution"
          items={[
            { label: 'Article 27 — Human Shield', href: '#why' },
            { label: 'Article 29 — Wynns Principle', href: '#about' },
            { label: 'Article 13 — Davis Honesty', href: '#why' },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { label: 'About', href: '#about' },
            { label: 'Process', href: '#process' },
            { label: 'Contact', href: '#contact' },
          ]}
        />
      </div>

      <div className="border-t border-[#00B4D8]/8 px-6 md:px-12 py-6">
        <div className="container-max flex flex-col md:flex-row justify-between gap-4 text-xs text-[#E0F7FF]/45">
          <div>
            © {year} Maximus AI Strategic Advisory. All rights reserved. The shield means
            something.
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#00B4D8]">
              Wynns Doctrine
            </a>
            <a href="#why" className="hover:text-[#00B4D8]">
              Article 27 (public summary)
            </a>
            <a href="mailto:joel@maximusintel.com" className="hover:text-[#00B4D8]">
              Privacy / Terms (request via email)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-label mb-4">{title}</div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="text-sm text-[#E0F7FF]/70 hover:text-[#00D4FF]">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNew;
