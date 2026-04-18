// Maximus AI Strategic Advisory — Website
// Created: 2026-03-07
// Rebuilt: 2026-04-18 per directive 87566ed7 (Option B / Scope 2) + Article 29 (Wynns Principle)
// Brand source of truth: maximus-brand-identity skill v1.1 (LOCKED 2026-03-21)
//
// 9-section structure (per directive):
//   1. Hero (brand anchor verbatim)
//   2. Proof (sandbox table — VERIFIED data)
//   3. Flagship Service (Competitive Edge Report)
//   4. In Development (4 services with HONEST labels)
//   5. Why Maximus (Three-Layer Trust Stack)
//   6. About (Wynns Doctrine origin story)
//   7. Process (4-step engagement)
//   8. Contact (form + email + Jupiter FL presence)
//   9. Legal Footer (Article 27/29 public summaries)
//
// Status: STAGED FOR JOEL REVIEW — NOT PUBLISHED TO PRODUCTION

import './index.css';
import { Nav } from './components/Nav';
import { Hero } from './components/HeroNew';
import { Proof } from './components/Proof';
import { FlagshipService } from './components/FlagshipService';
import { InDevServices } from './components/InDevServices';
import { WhyMaximus } from './components/WhyMaximus';
import { AboutWynns } from './components/AboutWynns';
import { Process } from './components/Process';
import { ContactNew } from './components/ContactNew';
import { FooterNew } from './components/FooterNew';
import { JsonLd } from './components/JsonLd';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-[#E0F7FF]">
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <Proof />
        <FlagshipService />
        <InDevServices />
        <WhyMaximus />
        <AboutWynns />
        <Process />
        <ContactNew />
      </main>
      <FooterNew />
    </div>
  );
}

export default App;
