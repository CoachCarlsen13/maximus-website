// AEO Schema.org JSON-LD — per directive 87566ed7
// Required schemas: Organization, Service (ComingSoon for in-dev),
// Person (Joel Wynns), FAQ, BreadcrumbList. NO AggregateRating until real reviews.
// Created 2026-04-18.

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maximus AI Strategic Advisory',
  alternateName: 'Maximus AI',
  url: 'https://maximusintel.com',
  email: 'joel@maximusintel.com',
  description:
    'Enterprise-grade competitive intelligence and AI strategic advisory for small and mid-size businesses. Sandbox-validated A-grade quality before client delivery.',
  founder: {
    '@type': 'Person',
    name: 'Joel Wynns',
    jobTitle: 'Founder',
    description:
      'Founder of Maximus AI. The pen name "Joel Wynns" reads as Joel Wins, encoding Article 29 of the Maximus Constitution: Maximus succeeds only when those it serves succeed.',
  },
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jupiter',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: ['Palm Beach County', 'Florida', 'United States'],
  brand: {
    '@type': 'Brand',
    name: 'Maximus AI',
    slogan: "The world's first AI Business Intelligence system you can TRUST.",
  },
};

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joel Wynns',
  alternateName: 'Joel Wynns, Founder of Maximus AI',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Maximus AI Strategic Advisory',
    url: 'https://maximusintel.com',
  },
  description:
    'Founder of Maximus AI Strategic Advisory. Public pen name "Joel Wynns" reads as "Joel Wins" — encoding Article 29 (Wynns Principle / Victory Interdependence Doctrine): Maximus succeeds only when those it serves succeed. The company is named after the founder\'s son, a United States Marine Military Police, whose name embodies the protection doctrine at the heart of the brand.',
  email: 'joel@maximusintel.com',
};

const FLAGSHIP_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Competitive Intelligence Audit',
  name: 'Competitive Edge Report',
  alternateName: 'Config A Competitive Intelligence Audit',
  provider: {
    '@type': 'Organization',
    name: 'Maximus AI Strategic Advisory',
    url: 'https://maximusintel.com',
  },
  description:
    'Comprehensive intelligence audit mapping a business\'s competitive position, AI answer-engine visibility, and intelligence gaps. Sandbox-validated at A-grade across 10 businesses before opening to paying clients. Delivered in 5 business days.',
  areaServed: ['Palm Beach County', 'Florida', 'United States'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Competitive Edge Report',
    itemListElement: [
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Competitive Edge Report',
          description: 'Sandbox-validated A-grade competitive intelligence audit, 5-day delivery.',
        },
      },
    ],
  },
};

// In-development services use availability: PreOrder (closest schema.org match for "Coming Soon")
function inDevService(name: string, description: string, targetQuarter: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Maximus AI Strategic Advisory',
      url: 'https://maximusintel.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name,
      itemListElement: [
        {
          '@type': 'Offer',
          availability: 'https://schema.org/PreOrder',
          availabilityStarts: targetQuarter,
          itemOffered: { '@type': 'Service', name },
        },
      ],
    },
  };
}

const TROJAN_HORSE_SCHEMA = inDevService(
  'Trojan Horse Strategic Intelligence Audit',
  'Deep-dive strategic intelligence audit for businesses facing a material strategic choice. In sandbox validation. Target launch Q2 2026.',
  '2026-04-01',
);

const MIP_SCHEMA = inDevService(
  'Maximus Intelligence Platform (MIP)',
  'Always-on competitive intelligence dashboard — continuous monitoring of competitors, AI visibility, market signals. Target launch Q2 2026.',
  '2026-04-01',
);

const MANAGED_AGENT_SCHEMA = inDevService(
  'Managed AI Agent Services',
  'Dedicated AI agents (Lea client success, Susan prospecting, Lucas sales, Guy negotiation, Carol QC). Inherit Article 27 (Human Shield Doctrine) and Article 26 (Zero Latent Trait Contamination). Target launch Q3 2026.',
  '2026-07-01',
);

const BROKER_CERT_SCHEMA = inDevService(
  'Maximus Broker Certification Program',
  'Certification for displaced professionals to run their own AI-backed advisory practice in their local market. Target launch Q3 2026.',
  '2026-07-01',
);

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Competitive Edge Report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A comprehensive competitive intelligence audit that shows where your business stands against local competitors in three dimensions: competitive positioning, AI answer-engine visibility, and intelligence gaps. Delivered in 5 business days. Sandbox-validated at A-grade across 10 businesses before opened to paying clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why "Joel Wynns"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Joel Wynns reads as Joel Wins. The pen name encodes Article 29 of the Maximus Constitution (the Wynns Principle): Maximus succeeds only when those it serves succeed. If the name wins, every SMB owner who hired Maximus has won, every certified broker has won, every family has won. The compression is the contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Maximus refuse to use AggregateRating or fake testimonials?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Article 27 (Human Shield Doctrine) and Article 13 (Davis Honesty) prohibit fabricated reviews, manufactured urgency, and any deception of clients. Until Maximus has real paying clients who consent to public testimonials, no AggregateRating, testimonial, or case study appears on this site.',
      },
    },
    {
      '@type': 'Question',
      name: 'When are the in-development services available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Trojan Horse Audit and Maximus Intelligence Platform target Q2 2026. Managed AI Agent Services and Broker Certification Program target Q3 2026. Each unlocks only when sandbox-validated at the Maximus quality standard. Waitlists open now.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Maximus AI located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Maximus AI is based in Jupiter, Florida (Palm Beach County). Delivery is remote-first across the United States; Palm Beach County engagements may include in-person discovery and review sessions.',
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://maximusintel.com',
    },
  ],
};

const SCHEMAS = [
  ORG_SCHEMA,
  PERSON_SCHEMA,
  FLAGSHIP_SERVICE_SCHEMA,
  TROJAN_HORSE_SCHEMA,
  MIP_SCHEMA,
  MANAGED_AGENT_SCHEMA,
  BROKER_CERT_SCHEMA,
  FAQ_SCHEMA,
  BREADCRUMB_SCHEMA,
];

export function JsonLd() {
  return (
    <>
      {SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default JsonLd;
