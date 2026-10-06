export type ProdigiSubApp = {
  name: string;
  subdomain: string;
  url: string;
  role: string;
  description: string;
};

export type ProdigiArchitectureLayer = {
  layer: string;
  badge: string;
  tech: string[];
  description: string;
};

export type ProdigiFeature = {
  title: string;
  tag: string;
  description: string;
  impact: string;
};

export const prodigiCaseStudy = {
  badge: 'Production Flagship Project',
  company: 'PT. Asia e-Services',
  title: 'Prodigi UMKM',
  subtitle: 'Enterprise AI Mentoring & Business Intelligence Platform',
  tagline:
    'High-impact enterprise ecosystem empowering Indonesian MSMEs (UMKM) with AI-powered business audits, persistent context mentoring, actionable intelligence reports, and ERP automation.',
  clientConfidentialityNotice:
    'Proprietary enterprise project for PT. Asia e-Services. Codebase is hosted on a private GitLab repository and protected by NDA. Architecture, design systems, and public live URLs are demonstrated below.',
  
  metrics: [
    { label: 'Ecosystem Apps', value: '4+ Web Apps + Mobile' },
    { label: 'Backend Architecture', value: 'Odoo 18 + FastEmbed' },
    { label: 'Vector Similarity', value: 'pgvector (384-dim)' },
    { label: 'Omnichannel Comm', value: 'Baileys WA Gateway' },
  ],

  apps: [
    {
      name: 'UMKM Portal Dashboard',
      subdomain: 'app.prodigiumkm.net',
      url: 'https://app.prodigiumkm.net',
      role: 'Core SaaS App',
      description:
        'Interactive business owner cockpit featuring AI business audits, contextual mentor chats, curated todo workflows, and subscription checkout.',
    },
    {
      name: 'Public Landing & Marketing',
      subdomain: 'prodigiumkm.net',
      url: 'https://prodigiumkm.net',
      role: 'Brand & Acquisition',
      description:
        'High-converting landing page with A/B experiment routing, success stories, legal hubs, and interactive mentor showcase carousels.',
    },
    {
      name: 'Affiliate & Partner Portal',
      subdomain: 'partner.prodigiumkm.net',
      url: 'https://partner.prodigiumkm.net',
      role: 'Affiliate Network',
      description:
        'Dedicated dashboard for community affiliates with referral tracking, commission tier analytics, and marketing kits.',
    },
    {
      name: 'Internal Office Management',
      subdomain: 'office.prodigiumkm.net',
      url: 'https://office.prodigiumkm.net',
      role: 'Backoffice Operations',
      description:
        'Operations cockpit for managing MSME tenant data, reviewing compliance, expert matching, and commission disbursements.',
    },
  ] as ProdigiSubApp[],

  architecture: [
    {
      layer: 'Frontend Layer',
      badge: 'Micro-Frontend Monorepo',
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'npm workspaces', '@prodigi/shared'],
      description:
        'Unified monorepo with cross-application shared design systems, authentication contexts, and typed API clients across 4 distributed web applications.',
    },
    {
      layer: 'Backend & ERP Core',
      badge: 'Modular REST API',
      tech: ['Odoo 18', 'Python', 'km_restapi', 'PostgreSQL', 'Redis'],
      description:
        'Custom modular Odoo 18 addons providing authenticated REST APIs, business logic orchestration, billing, and session caching.',
    },
    {
      layer: 'AI & Vector Intelligence',
      badge: 'RAG & Embeddings',
      tech: ['FastEmbed', 'multilingual-e5-small', 'pgvector (Postgres)', 'AI Audit Engine'],
      description:
        'Local semantic vector embedding pipeline running on Postgres pgvector to power business similarity queries and personalized mentor insights.',
    },
    {
      layer: 'Omnichannel & Integrations',
      badge: 'Automated Messaging',
      tech: ['Node.js', 'Baileys WhatsApp Gateway', 'Webhooks', 'Docker Compose'],
      description:
        'Real-time WhatsApp notifications, OTP verification, and automated mentor updates bridged through custom Baileys gateway services.',
    },
  ] as ProdigiArchitectureLayer[],

  keyFeatures: [
    {
      title: 'Automated AI Business Audit',
      tag: 'Diagnostics',
      description:
        'Self-service diagnostic questionnaire evaluating readiness across pricing, market access, compliance, and capital with instant visual score gauges.',
      impact: 'Drives high-intent user acquisition and instant problem discovery before checkout.',
    },
    {
      title: 'Stateful AI Mentor ObrolanChat',
      tag: 'Continuous Mentoring',
      description:
        'Unlike generic one-off chat models, the mentor retains continuous business profile memory (Business Model Canvas + official KBLI classification).',
      impact: 'Eliminates repetitive re-prompting; provides bespoke strategic business advice.',
    },
    {
      title: 'Intelligence Reports & Curated Todolist',
      tag: 'Execution Engine',
      description:
        'Generates actionable intelligence briefs and converts audit insights into structured, scheduled todos with automated progress tracking.',
      impact: 'Transforms passive consulting insights into day-to-day operational execution.',
    },
    {
      title: 'Human Expert Consultation Marketplace',
      tag: 'Hybrid Support',
      description:
        'Seamless escalation bridge connecting MSME entrepreneurs to accredited human consultants for legal, financing, and deep technical problems.',
      impact: 'Blends automated scalable AI with high-trust human expertise.',
    },
  ] as ProdigiFeature[],
};
