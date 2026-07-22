import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Fast, conversion-focused websites built to grow with your business.',
    description:
      "I design and build websites that do more than look good — they load fast, rank well, and turn visitors into customers. From WordPress builds to custom storefronts, every site I ship is engineered around the outcome you actually need.",
    skills: ['Responsive design', 'Performance tuning', 'CMS architecture', 'Payment integration'],
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'React', 'PageSpeed Insights'],
    image: 'portrait-desk-1',
    icon: 'Code2',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation and Literacy Trainer',
    shortDescription: 'Practical AI systems and training that make teams faster, not replaced.',
    description:
      "I help businesses cut through the AI noise with automations that save real hours and hands-on training that builds confidence across teams. This isn't theory — it's workflows that work on day one.",
    skills: ['Workflow automation', 'Prompt engineering', 'Team training', 'Tool integration'],
    technologies: ['Kartra', 'Zapier-style automation', 'CRM integrations', 'ChatGPT/Claude workflows'],
    image: 'portrait-desk-3',
    icon: 'Sparkles',
  },
  {
    id: 'seo-social',
    title: 'SEO & Social Media Management',
    shortDescription: 'Content and search strategy that compounds your visibility over time.',
    description:
      'I build the content engine behind brands that show up — structured SEO, a consistent posting calendar, and messaging that matches how your audience actually searches and scrolls.',
    skills: ['Keyword strategy', 'Content calendars', 'On-page SEO', 'Community growth'],
    technologies: ['Google Search Console', 'HubSpot', 'LinkedIn', 'Instagram', 'Facebook'],
    image: 'portrait-studio-2',
    icon: 'TrendingUp',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Specialist',
    shortDescription: 'Ad campaigns built around real audiences and real return.',
    description:
      'I plan, launch, and optimize Meta ad campaigns with a clear goal in mind: cost-efficient reach that turns into leads and sales, not just impressions.',
    skills: ['Audience research', 'Campaign structuring', 'Creative testing', 'Budget optimization'],
    technologies: ['Meta Ads Manager', 'Meta Pixel', 'A/B testing', 'Analytics'],
    image: 'portrait-casual-3',
    icon: 'Target',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Website Development',
    shortDescription: 'Online stores built to handle real catalogs and real customers.',
    description:
      "From uploading thousands of products to configuring checkout and shipping logic, I build ecommerce sites that are ready for volume from day one — not a demo store dressed up for launch.",
    skills: ['Store architecture', 'Bulk product management', 'Checkout optimization', 'Inventory setup'],
    technologies: ['WooCommerce', 'Shopify-style flows', 'Payment gateways', 'Product data'],
    image: 'portrait-desk-2',
    icon: 'ShoppingBag',
  },
]
