export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudyWorkstream {
  title: string
  body: string
}

export interface CaseStudy {
  slug: string
  category: string
  industry: string
  heroHeadline: string
  summary: string
  client: string
  challenge: string
  workstreams: CaseStudyWorkstream[]
  metrics: CaseStudyMetric[]
  resultsSummary: string
  quote?: { text: string; attribution: string }
  image: string
  excerpt: string
  keyMetric: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'project-management',
    category: 'Project Management',
    industry: 'Creative Agency',
    heroHeadline: 'Zero missed deadlines across 40 live client projects.',
    summary:
      'A 12-person boutique creative agency was drowning in status emails and deadline slippage. We placed a dedicated VA who owned the entire project coordination layer so their PMs could focus on the work.',
    client:
      'A boutique creative studio with twelve full-time staff and a roster of 40+ concurrent client engagements, ranging from brand identities to campaign rollouts. The founders were creatives first, operators second, and it showed.',
    challenge:
      'Project status lived in scattered email threads and underpowered spreadsheets. PMs spent the majority of their week chasing deliverables, writing status updates, and following up on approvals, leaving almost no time for the creative direction they were hired to provide. Deadlines were slipping. Clients were noticing.',
    workstreams: [
      {
        title: 'Project Tracking',
        body: 'Set up and maintained a centralised tracking system across all 40 active projects: statuses, owners, deadlines, and blockers updated daily. PMs finally had a single source of truth.',
      },
      {
        title: 'Client Communication',
        body: 'Drafted and sent weekly client status emails, fielded non-creative client questions, and only escalated to the PM when genuine judgment was required.',
      },
      {
        title: 'Internal Coordination',
        body: 'Ran a weekly internal standup, maintained the shared delivery calendar, chased deliverable owners on a daily cadence, and surfaced risks before they became missed deadlines.',
      },
    ],
    metrics: [
      { value: '40', label: 'Concurrent projects managed' },
      { value: '0', label: 'Missed client deadlines (6 months)' },
      { value: '8 hrs', label: 'Reclaimed per PM, per week' },
    ],
    resultsSummary:
      'The agency went six consecutive months without a single missed client deadline, a first in their four-year history. Each PM reclaimed roughly eight hours per week, which they reinvested into creative direction and client relationships rather than inbox management.',
    quote: {
      text: 'We stopped losing sleep over what might be slipping through the cracks. Our VA just handles it, and now we can actually focus on the work we love.',
      attribution: 'Creative Director, Boutique Studio',
    },
    image: '/assets/img/work/project-management.jpg',
    excerpt:
      'We kept a 12-person agency on schedule across 40 live client projects: six months, zero missed deadlines.',
    keyMetric: '0 missed deadlines',
  },
  {
    slug: 'media-marketing',
    category: 'Marketing & Social',
    industry: 'Creator / Founder',
    heroHeadline: 'Tripled audience reach without adding a single hire.',
    summary:
      'A solo founder building a personal brand alongside a product business was spending 2+ hours daily on social tasks. We took over the content calendar, inbox, and publishing rhythm so they could show up online without being consumed by it.',
    client:
      'A solo founder running a SaaS product and an audience-led content business simultaneously. They had strong ideas, a growing following, and a genuine point of view, but no system for turning any of it into consistent output.',
    challenge:
      'The posting schedule was erratic: sometimes brilliant, often absent. A growing partnership inbox was going unanswered for days. Long-form content the founder spent hours writing was published once and abandoned. They were spending two hours daily on tasks that produced inconsistent results, and burning out on the very audience they were trying to build.',
    workstreams: [
      {
        title: 'Content Calendar',
        body: 'Built a 30-day rolling content calendar that mixed original ideas with repurposed long-form material. The founder reviewed and approved everything in a single weekly 20-minute session.',
      },
      {
        title: 'Publishing & Scheduling',
        body: 'Handled all scheduling, formatting, and cross-platform publishing. Repurposed podcast episodes and long-form articles into short-form clips, carousel threads, and newsletter excerpts.',
      },
      {
        title: 'Inbox & Partnerships',
        body: "Triaged the brand inbox daily, responded to routine partnership enquiries with approved templates, and surfaced only genuine opportunities that required the founder's direct voice.",
      },
    ],
    metrics: [
      { value: '3×', label: 'Audience growth in 90 days' },
      { value: '2×', label: 'Email open rate improvement' },
      { value: '15 min', label: 'Daily founder review time' },
    ],
    resultsSummary:
      'Follower count tripled across platforms within ninety days of consistent publishing. Email open rates doubled as the newsletter cadence stabilised. The founder went from spending two-plus hours per day on social tasks to a single fifteen-minute morning review.',
    quote: {
      text: "I'd been telling myself I just needed more discipline. What I actually needed was someone to own the system so I could show up and create.",
      attribution: 'Solo Founder, SaaS & Content Business',
    },
    image: '/assets/img/work/media-marketing.jpg',
    excerpt:
      "A daily social calendar and inbox triage that tripled a founder's reach and gave them back their mornings.",
    keyMetric: '3× audience growth',
  },
  {
    slug: 'operations-support',
    category: 'Operations & Finance',
    industry: 'SaaS / Tech',
    heroHeadline: 'Recovered 80 engineering hours a month from admin work.',
    summary:
      'A six-person SaaS team was paying engineers to do invoicing, expense reporting, and CRM hygiene. We absorbed all of it and raised their CRM data quality from 34% to 91% complete in the process.',
    client:
      'An early-stage SaaS startup with six full-time employees, all technical. They had strong product instincts and a growing customer base, but no dedicated operations function. Admin tasks were being squeezed in between sprint work at an enormous opportunity cost.',
    challenge:
      'Finance operations (invoicing cycles, expense categorisation, vendor follow-ups) were being handled by engineers and co-founders at an effective rate of $150+ per hour. The CRM was a graveyard: contact records were stale, deal stages were wrong, and onboarding notes were missing for nearly two-thirds of customers. Nobody had bandwidth to fix it.',
    workstreams: [
      {
        title: 'Invoicing & Finance Ops',
        body: 'Took full ownership of the monthly invoicing cycle: generating, sending, and chasing invoices, categorising expenses, preparing reconciliation summaries, and coordinating with the external accountant.',
      },
      {
        title: 'CRM Hygiene',
        body: 'Audited all contact and deal records, standardised data entry conventions, back-filled missing fields from email history and call notes, and established a weekly hygiene routine to keep records current.',
      },
      {
        title: 'Vendor Management',
        body: 'Handled routine vendor communications, managed subscription renewals, fielded inbound supplier queries, and maintained a shared contract and renewal calendar so nothing expired unnoticed.',
      },
    ],
    metrics: [
      { value: '91%', label: 'CRM completeness (up from 34%)' },
      { value: '80 hrs', label: 'Recovered for engineering per month' },
      { value: '0', label: 'Missed invoices since handover' },
    ],
    resultsSummary:
      'CRM health went from 34% to 91% complete in eight weeks. The engineering team reclaimed an estimated 80 hours per month that had previously been consumed by admin. Invoice cycles now run without manual intervention from the founding team.',
    quote: {
      text: "We were effectively paying senior engineers to chase invoices. Having someone who just owns that layer has been one of the highest-leverage things we've done.",
      attribution: 'Co-founder, Early-stage SaaS',
    },
    image: '/assets/img/work/operations-support.jpg',
    excerpt:
      'Invoicing, CRM hygiene, and ops admin handled end-to-end, freeing engineers to build, not file expenses.',
    keyMetric: '80 hrs/month recovered',
  },
]
