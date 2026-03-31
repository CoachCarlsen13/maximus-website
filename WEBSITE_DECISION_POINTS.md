# Maximus Website Rebuild — 10 Decision Points
## Generated: 2026-03-27 | For Joel's Review

**Context:** The website is THE single biggest blocker in the system.
It blocks: content pipeline, AEO visibility, revenue guardrail release, Client Zero proof, Content Engine SMART Score.
Current state: Next.js 15 site exists at maximus-site-jade.vercel.app with 6 pages. maximusintel.com domain purchased.

---

## DECISION 1: Platform — Next.js 15 or GHL AI Studio?

**Status of current build:** Next.js 15 + Vercel. ~400 lines of code. 6 pages scaffolded.

**Option A — Stay Next.js 15**
- PRO: Already built. Vercel = proper SSR. Full AI crawler visibility. AEO-ready. Your repo (CoachCarlsen13/maximus-site).
- PRO: You own the code. No platform lock-in. Free to scale.
- CON: Requires Code to build content sections, blog, and forms — estimated 3-4 hours to V1 launch-ready.

**Option B — GHL AI Studio**
- PRO: Clones websites from screenshots, natural language editing, native CRM integration.
- CON: **CRITICAL QUESTION: Does GHL AI Studio render server-side?** If pages are JS-rendered only, AI crawlers (ChatGPT, Perplexity, Claude) can't index them — kills your AEO strategy entirely.
- CON: Rebuilding from scratch = restart. The Next.js work is gone.
- CON: GHL AI Studio is Labs-tier — untested at production quality.

**Joel's decision needed:**
- [ ] A) Stay Next.js 15 — finish and launch what's built (recommended)
- [ ] B) Evaluate GHL AI Studio first — Code will test SSR rendering before any rebuild decision

---

## DECISION 2: Go-Live Gate — What Does V1 Need to Launch?

**Current site has:** Homepage, Free Report page, AI Audit page, Growth Simulator page, Intelligence Bible page, Book page.

**What's missing from each page (preliminary audit):**
- All pages need: real body copy, CTAs connected to forms, social proof, metadata
- Homepage: hero exists, stats exist, sections likely incomplete
- Free Report: form needs to actually capture leads and push to Supabase
- AI Audit: pricing or intake form? Currently unclear
- Growth Simulator: has a form component — is it wired to anything?
- Intelligence Bible / Book: likely placeholder content

**Joel's decision needed:**
- [ ] A) Hard launch date — pick a date, Code finishes everything to that standard
- [ ] B) Soft launch gate — define the MINIMUM 3 things that must work before going live
- [ ] C) Launch homepage + free report page only (2-page V1), build rest post-launch

---

## DECISION 3: Primary CTA — What Does Every Page Drive To?

**The three options:**

**Option A — Free Competitive Edge Report** (recommended)
- Low friction. Joel can deliver with Audit Team in 24 hours.
- Builds pipeline immediately. Trojan Horse entry.
- Maps to Tier 1: Intelligence Sprint ($297 upsell).

**Option B — Book a Strategy Call**
- Higher intent. But requires Joel's calendar to be ready + calendar booking tool live.
- Risk: no-shows kill momentum at early stage.

**Option C — AI Audit**
- Positions Maximus as technical assessors.
- Better for mid-funnel visitors who already know they need AI.
- Less accessible to cold traffic.

**Joel's decision needed:**
- [ ] A) Free Report as primary CTA (Code will wire all pages to a single lead capture form)
- [ ] B) Strategy Call as primary CTA (Code will integrate calendar booking tool — Calendly or similar)
- [ ] C) Split by page — homepage → Free Report, services pages → Strategy Call

---

## DECISION 4: Services Architecture — What Pages Does the Site Need?

**Current structure (6 pages):** Homepage, Free Report, AI Audit, Growth Simulator, Intelligence Bible, Book

**Missing high-priority pages:**
- `/services` or `/what-we-do` — overview of all 3 service tiers
- `/pricing` (or `/packages`) — Tier 1 $297 / Tier 2 $597/mo / Tier 3 $2.5-5K/mo
- `/about` — Joel's story, Maximus origin, credibility
- `/blog` or `/insights` — required for AEO + organic traffic (see Decision 7)
- `/contact` — standalone form

**Joel's decision needed:**
- [ ] A) Add 4 missing pages now (Code builds them in this session — adds ~2 hours)
- [ ] B) Launch with current 6 pages, add missing pages in V1.1 next week
- [ ] C) Specify which pages to prioritize — Joel picks top 2 to add now

---

## DECISION 5: Lead Capture → Command Center Integration

**Current state:** Lead capture forms exist (or are scaffolded) on the site. **They are NOT connected to anything.**

**Required for launch:**
- Form submission → POST to Railway API → Store lead in Supabase `leads` table
- Telegram alert fires: "New lead: [name] from [company] requested [service]"
- Lead enters CEO Agent action queue for follow-up

**This is non-negotiable for launch.** A website without lead capture is a brochure.

**Joel's decision needed:**
- [ ] A) Code wires form → Railway API → Supabase + Telegram in this session (2-3 hours)
- [ ] B) Use a third-party form tool (Tally, Typeform) as quick bridge until native is built
- [ ] C) Launch without live lead capture temporarily — Code sets this as P0 post-launch

---

## DECISION 6: Proof Assets — What Social Proof Goes on the Site at Launch?

**The problem:** Maximus has no client testimonials yet. Client Zero hasn't engaged.

**Options:**

**Option A — Jupiter FL Pipeline Results** (recommended)
- The Trojan Horse audit pipeline ran on Tighter Lines Aesthetics, BeginAnew Med Spa, and others.
- Use anonymized results: "A Jupiter FL med spa discovered 3 competitors ranked higher on ChatGPT for their top service terms. Within 90 days of implementing our recommendations, they recovered the #1 position."
- Not fake. Not a named client. Real outcomes from a real audit.

**Option B — Data-Driven Stats**
- Lead with industry statistics: "83% of SMBs have no AI strategy. Your competitors are building one right now."
- Stats from displacement data (already in Supabase): WEF 92M jobs, Goldman 300M, etc.

**Option C — Founder Credibility**
- Joel's CCG background (largest independent telecom consulting firm), book in progress, client track record.
- Personal brand before company brand.

**Option D — Wait for Client Zero**
- Hold the website launch until you have a real testimonial.
- Risk: indefinite delay.

**Joel's decision needed:**
- [ ] Which proof approach? Can combine A+B+C (recommended). D is not acceptable as a blocker.

---

## DECISION 7: AEO Technical Foundation — Required Before Pipeline Runs

**AEO (AI Engine Optimization) requires these technical elements.** Without them, the AI Visibility Audit pipeline can't verify your scores.

**Checklist — Code can implement all of these:**
- [ ] `LLMs.txt` file at maximusintel.com/llms.txt — tells AI crawlers what your site is about
- [ ] Schema.org markup — `Organization`, `Service`, `FAQPage` structured data on every page
- [ ] SSR confirmed (Next.js 15 = SSR by default — ✅ already done)
- [ ] FAQ sections on service pages — AEO citation targets
- [ ] Semantic H1/H2 structure optimized for AI engine queries
- [ ] Sitemap.xml + robots.txt
- [ ] Open Graph metadata on every page

**Joel's decision needed:**
- [ ] A) Code implements all AEO foundations now — this is table stakes, not optional
- [ ] B) Do it post-launch as V1.1 (not recommended — AEO is the entire value prop)

---

## DECISION 8: Content/Blog Section — Required for Long-Term AEO

**The website needs a content section** to feed the Content Engine SMART Score and generate AEO citations.

**Options:**
**Option A — /insights** section (articles, intelligence briefings)
**Option B — /blog** (traditional SEO approach)
**Option C — /intelligence** (already exists as a page — repurpose it as a content hub)

**Minimum viable content at launch:**
- 3-5 articles on AI displacement, competitive intelligence, SMB AI strategy
- Generated by Claude using Joel's voice and displacement data from Supabase

**Joel's decision needed:**
- [ ] A) Use existing /intelligence page as the content hub
- [ ] B) Create new /insights section
- [ ] C) Skip blog at launch — add post-V1 (costs 60 days of AEO momentum)

---

## DECISION 9: Domain Status — Is maximusintel.com Live?

**What's configured:**
- Domain purchased at Namecheap (2026-03-18)
- vercel.json has www → non-www redirect configured
- Deployment exists at maximus-site-jade.vercel.app

**Unknown:**
- Is the Namecheap DNS pointing to Vercel's nameservers?
- Is maximusintel.com resolving? (Code can verify with a network request)
- Is SSL certificate issued and active?

**If domain is NOT live:** This is a 10-minute fix (update Namecheap DNS). Not a blocker — just a task.

**Joel's decision needed:**
- [ ] A) Code verifies domain status right now and fixes DNS if needed
- [ ] B) Joel manually checks Namecheap and updates DNS records

---

## DECISION 10: Rebuild vs. Refine — What Actually Needs to Change?

**The "website rebuild" is mentioned repeatedly as the blocker. But the site EXISTS.** This decision forces clarity.

**What likely needs a rebuild:**
- Missing content (copy, CTAs, forms wired up) — **REFINE**, not rebuild
- Missing pages (/about, /pricing, /blog) — **ADD**, not rebuild
- Lead capture not connected — **FIX**, 2-3 hours
- AEO technical elements missing — **ADD**, 4-6 hours

**What might need a true rebuild:**
- If the homepage design/brand is off-target from Joel's vision — redesign needed
- If the messaging isn't right — copy overhaul needed
- If platform decision (Decision 1) goes to GHL — true rebuild

**Joel's decision needed — critical clarification:**
- [ ] A) The site just needs finishing (Code completes missing content, wires forms, adds pages) — estimated 6-8 hours total
- [ ] B) The design/brand is wrong and needs a visual overhaul — Joel specifies what's wrong
- [ ] C) The messaging is wrong and needs new positioning — Joel specifies the correct angle

---

## SUMMARY — What Code Can Execute Immediately (Without Joel's Decision)

These are unambiguous — Code will execute these regardless of the above decisions:

1. **Verify domain DNS** — check maximusintel.com resolves
2. **Add LLMs.txt** — required AEO file, no decision needed
3. **Add sitemap.xml** — required SEO/AEO, no decision needed
4. **Wire Growth Simulator form** to Railway API (it has a form component)
5. **Add Schema.org markup** to homepage (LocalBusiness + Service types)

**Blocked by Joel's decisions:**
- Platform (D1) — must decide before rebuilding anything
- Primary CTA (D3) — determines form structure for D5
- Lead capture wiring (D5) — 3-hour build, needs D3 first

---

## RECOMMENDATION

**Path of least resistance to launch in 48 hours:**

1. Decide: Stay Next.js 15 (recommended — it's built)
2. Decide: Free Report as primary CTA on all pages
3. Code wires all forms → Railway API → Supabase leads table → Telegram alert
4. Code adds /about, /pricing, /blog (3 pages, ~3 hours)
5. Code adds LLMs.txt, sitemap, Schema.org markup
6. Code verifies maximusintel.com DNS
7. Launch

**Estimated total work:** 8-10 hours of Code execution.
**Result:** Live, AEO-optimized, lead-capturing website.
**Unlocks:** Content pipeline, AEO scores, revenue guardrail, Client Zero proof.

---

*Decision Points generated 2026-03-27 by Code agent based on codebase analysis.*
*Joel — mark your decisions on each item and reply. Code will execute immediately.*
