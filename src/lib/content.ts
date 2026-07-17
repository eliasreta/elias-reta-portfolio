export const site = {
  name: "Elias Reta",
  role: "Product / Technical Program Manager",
  linkedin: "https://www.linkedin.com/in/elias-reta-b82260111/?skipRedirect=true",
  email: "eliasreta16@gmail.com",
  resumeHref: "/resume.pdf",
};

export const metrics = [
  {
    value: 3.2,
    prefix: "$",
    suffix: "B+",
    decimals: 1,
    label: "Consumer Commerce APIs revenue owned annually",
  },
  {
    value: 9.4,
    prefix: "$",
    suffix: "B+",
    decimals: 1,
    label: "Annual global partner payouts governed",
  },
  {
    value: 80,
    prefix: "$",
    suffix: "M+",
    decimals: 0,
    label: "Secured in fraud prevention",
  },
  {
    value: 1.9,
    prefix: "",
    suffix: "M+",
    decimals: 1,
    label: "Fraudulent POS activations blocked",
  },
  {
    value: 99.96,
    prefix: "",
    suffix: "%",
    decimals: 2,
    label: "On-time & accurate payment SLA (vs. 99% target)",
  },
];

export type CaseStudy = {
  title: string;
  org: string;
  timeframe: string;
  context: string;
  role: string;
  work: string;
  impact: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "3P Subscription Conversion Platform",
    org: "Xbox Consumer Commerce Platform (XCCP)",
    timeframe: "FY26",
    context:
      "Microsoft had no path for consumers to upgrade, downgrade, or crossgrade third-party Apple and Google subscriptions — a gap blocking one of XCCP's highest-visibility commerce investments of the year.",
    role: "Led the program end-to-end, aligning 6+ teams across 3 organizations.",
    work: "Delivered Microsoft's first 3P Apple and Google subscription conversion platform, enabling upgrades, downgrades, and crossgrades within existing commerce infrastructure.",
    impact: ["$10M projected 3-year revenue opportunity"],
  },
  {
    title: "High-Scale Fraud Detection & Prevention",
    org: "Xbox Consumer Commerce Platform (XCCP)",
    timeframe: "FY26",
    context:
      "Point-of-sale card activations across Microsoft's commerce platforms were exposed to large-scale fraud, putting business value and partner trust at risk.",
    role: "Orchestrated delivery of fraud detection and prevention capabilities across commerce platforms.",
    work: "Partnered with engineering and risk stakeholders to ship detection and prevention controls at production scale.",
    impact: ["1.9M+ fraudulent POS activations prevented", "~$58M in business value safeguarded"],
  },
  {
    title: "Partner Incentive Payouts Governance",
    org: "Microsoft Partner Program",
    timeframe: "Aug 2023 – Mar 2025",
    context:
      "$9.4B+ in annual partner payouts across 393K+ payments and 20K+ partners needed reliable governance — and risk management was reactive, surfacing only after engineering incidents.",
    role: "Owned weekly risk-triage and governance rhythms across engineering, finance, and operations.",
    work: "Co-designed automated intake and postmortem processes that expanded risk visibility beyond engineering incidents alone.",
    impact: [
      "Sustained up to 99.96% On-Time-and-Accurate payments vs. 99% SLA target",
      "Cut triage response time from 2+ weeks to under 2 hours",
      "55%+ year-over-year reduction in payment timeliness/accuracy issues",
    ],
  },
  {
    title: "Digital Retail Partner Invoicing Portal",
    org: "Xbox Consumer Commerce Platform (XCCP)",
    timeframe: "FY26",
    context:
      "Retail Channel partners received invoices manually via unencrypted email, often routed to incorrect contacts — a billing-health and security liability.",
    role: "Led delivery, coordinating 4 teams across 3 organizations.",
    work: "Shipped a secure, standalone self-service portal for partners to retrieve their own invoices.",
    impact: [
      "Improved billing health of ~8,520 invoices per year",
      "Eliminated ~700 annual support tickets",
      "Reduced BPO vendor costs",
    ],
  },
];

export const additionalImpact = [
  "Partnered with Finance, SAP, and engineering to align billing dates with transaction records, eliminating ~40 hours/month of manual reconciliation and improving Microsoft Bizops' billing compliance metric by 7–8 points.",
  "Supported backfill and reconciliation of 9 years of unredeemed token revenue data, enabling recognition of $1B+ in previously unreported revenue for Microsoft's Financial Reporting System.",
];

export const testimonials = [
  {
    quote:
      "What stood out most was his ability to bring clarity to ambiguity. As priorities shifted and new dependencies emerged, Elias remained laser focused to help align stakeholders, translate complex challenges into actionable next steps, and kept the launch moving forward as a team. He has a unique ability to build trust across teams while driving meaningful outcomes.",
    name: "Halia Davis",
    title: "Driving Global Readiness Across Microsoft's Commercial & Consumer Portfolios",
    relationship: "Colleague, cross-functional launch initiatives",
  },
  {
    quote:
      "Elias consistently brings a calm, solutions-oriented mindset that elevates the entire team. Elias has a rare ability to balance strategic thinking with operational execution. If you're looking for a product leader who combines technical depth, stakeholder savvy, and authentic leadership—Elias is that person.",
    name: "Zeuwa Nwana",
    title: "Senior Product & Program Manager",
    relationship: "Mentor",
  },
];

export const approach = [
  {
    title: "Ask \"why\" first",
    body: "I understand problems with empathy and patience before proposing solutions — the fastest path through ambiguity is understanding it fully, not skipping past it.",
  },
  {
    title: "Navigate complexity across orgs",
    body: "Commerce, payouts, and platform-security programs rarely live inside one team. I connect the stakeholders who need to move together and turn dependency-heavy ambiguity into measurable outcomes.",
  },
  {
    title: "Build with AI, not around it",
    body: "I integrate agentic AI — GitHub Copilot CLI, skills, and MCP servers — directly into daily PM workflows to bring clarity to complex codebases and APIs and establish AI-first execution patterns for the team.",
  },
];

export const experience = [
  {
    title: "Product/Technical PM, Xbox Consumer Commerce Platform (XCCP)",
    timeframe: "Mar 2025 – July 2026",
  },
  {
    title: "Product/Tech PM, Microsoft Partner Program",
    timeframe: "Aug 2023 – Mar 2025",
  },
];
