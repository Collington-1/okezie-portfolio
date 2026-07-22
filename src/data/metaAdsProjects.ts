import type { MetaAdsCaseStudy } from '@/types'

export const metaAdsProjects: MetaAdsCaseStudy[] = [
  {
    id: 'cv-writing-career-services',
    title: 'CV Writing & Career Services',
    client: 'Recruitment & Career Services Brand',
    role: 'Meta Ads Specialist',
    image: 'meta-ads-cv-writing-results',
    tags: ['Messaging Ads', 'Lead Generation', 'Competitor Research'],
    cardSummary:
      'Studied the Meta Ads Library to out-position competitors, then ran a WhatsApp-first campaign for a CV writing and career-services brand.',
    heroTitle: 'Turning competitor research into a profitable local ad campaign.',
    heroDescription:
      'A recruitment and career-services brand — offering CV writing, cover letters, SOPs and LinkedIn optimization — needed a Meta Ads campaign that actually turned into conversations, not just clicks.',
    briefTitle: 'Get a local career-services brand real leads, not just impressions.',
    briefDescription:
      "The client sells CV writing, cover letter writing, SOP writing and LinkedIn optimization to professionals and job seekers. The category is crowded — every recruitment and career-coaching page on Facebook is running some version of the same ad. The brief was simple to state and hard to pull off: stand out in that noise, and convert budget into real conversations with people who would actually pay for the service.",
    metrics: [
      { label: 'Messaging conversations started', value: '87' },
      { label: 'Amount spent (30 days)', value: '₦20,214.63' },
      { label: 'Cost per conversation', value: '₦232.35' },
      { label: 'Campaign window', value: 'Jun 5 – Jul 4' },
    ],
    strategy: [
      {
        icon: 'Search',
        title: 'Studied the Ads Library first',
        description:
          "Before writing a single word of ad copy, I went through Meta's Ads Library to see what career-services and CV-writing competitors were actually running. Ads that have been active for a while are usually the ones working — so I paid attention to which creative angles, offers and formats kept showing up.",
      },
      {
        icon: 'Target',
        title: 'Found the gap, not just the pattern',
        description:
          'Most competitor ads leaned on generic "we write CVs" messaging. I built the creative and copy around the client\'s specific strength — CV writing, cover letters, SOPs and LinkedIn optimization as one connected package — instead of copying the same angle everyone else was already running.',
      },
      {
        icon: 'MessageCircle',
        title: 'Built for WhatsApp, not a landing page',
        description:
          'Rather than sending traffic to a cold landing page, I ran the campaign on a messaging-conversation objective, so interested leads landed directly in a WhatsApp chat where they could ask questions and get a quote immediately.',
      },
    ],
    outcomeTitle: 'Steady, WhatsApp-first lead flow at a controlled cost.',
    outcomeDescription:
      'Over the campaign window, the ad set generated 87 messaging conversations for roughly ₦20,215 in spend — about ₦232 per conversation started, for a service that sells well above that per client. The WhatsApp-first funnel meant every one of those conversations landed with a real person on the other end, ready to ask questions and get a quote, not a bounce off a landing page.',
    highlights: [
      { icon: 'TrendingUp', text: 'Competitor research from Meta Ads Library shaped the creative before a single ad went live.' },
      { icon: 'MessageCircle', text: 'Messaging-objective campaign turned ad spend directly into WhatsApp conversations.' },
      { icon: 'Target', text: "Positioned around the client's full service bundle instead of copying competitor angles." },
    ],
    ctaTitle: 'Want ad results like this for your business?',
    ctaDescription: "Let's talk about your audience, your offer, and a campaign built around what actually converts.",
  },
]
