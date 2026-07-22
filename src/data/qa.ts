import type { QAItem } from '@/types'

export const qaItems: QAItem[] = [
  {
    id: 'wordpress-count',
    category: 'WordPress',
    label: 'WordPress track record',
    teaser: 'How many builds I’ve shipped',
    icon: 'Layers',
    question: 'How many WordPress projects have you completed?',
    answer:
      "Somewhere between 20 and 40 — enough that I stopped counting exactly and started tracking outcomes instead. WordPress has been my primary build platform across most of my seven years in this work, spanning NGOs, investment firms, hospitality brands and ecommerce stores.",
    points: ['20–40 WordPress builds shipped', '7+ years working on the platform', 'NGO, finance, hospitality & ecommerce clients'],
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Custom themes'],
  },
  {
    id: 'proudest-project',
    category: 'Case Study',
    label: 'Project I’m proudest of',
    teaser: 'The one that still makes me smile',
    icon: 'Star',
    question: 'What WordPress project are you most proud of, and why?',
    answer:
      "Powersurfacedecor.com. It wasn't just a WordPress build — it was a full WooCommerce store I populated end-to-end, structuring a large décor catalog so it could actually handle real customer volume from day one, not just look good in a demo. Watching a store I built product by product go live and start taking orders is still the most satisfying kind of finished.",
    points: ['Full WooCommerce catalog build', 'Structured for real volume, not a demo', 'Live at powersurfacedecor.com'],
    tags: ['WooCommerce', 'Catalog management', 'WordPress'],
  },
  {
    id: 'ecommerce-responsibilities',
    category: 'Ecommerce',
    label: 'Ecommerce responsibilities',
    teaser: 'What I actually handle end-to-end',
    icon: 'ShoppingBag',
    question: 'Which ecommerce responsibilities have you handled?',
    answer:
      "Store builds from the ground up on WooCommerce, bulk product uploads and catalog structuring at real scale — including nearly 2,000 products for one UK retailer — checkout and payment gateway configuration, and getting stores performance-tested and ready for launch traffic, not just a soft opening.",
    points: ['WooCommerce store architecture', 'Bulk catalog management at scale', 'Checkout & payment gateway setup'],
    tags: ['WooCommerce', 'Payment gateways', 'Product data', 'Inventory setup'],
  },
  {
    id: 'seo-approach',
    category: 'SEO',
    label: 'SEO & visibility',
    teaser: 'How I think about organic growth',
    icon: 'TrendingUp',
    question: 'What SEO principles are you familiar with, and have you done other online marketing work?',
    answer:
      "Keyword optimization is where it starts — matching page structure and content to how people actually search, not just stuffing terms in. Beyond that, I handle on-page SEO and technical cleanup like page speed and structured headings, and I run social media management and Meta ad campaigns alongside SEO, so the organic and paid sides of a client's visibility work together instead of in isolation.",
    points: ['Keyword & on-page SEO', 'Technical SEO & PageSpeed', 'Social media & Meta Ads alongside organic'],
    tags: ['SEO', 'Google Search Console', 'Meta Ads', 'Content strategy'],
  },
  {
    id: 'wordpress-challenge',
    category: 'Performance',
    label: 'Biggest WordPress challenge',
    teaser: 'The problem I solve on every build',
    icon: 'ShieldCheck',
    question: 'What are the biggest challenges you encounter when working on WordPress websites?',
    answer:
      "Plugin bloat, easily. It's the fastest way to wreck a site's speed and security without anyone noticing until it's too late. My approach is to keep the plugin count deliberately low — often under six on a full site — and lean on clean theme structure and custom code instead of stacking a plugin for every small feature. It's why sites I ship tend to score well on PageSpeed without extra rounds of optimization.",
    points: ['Plugin count kept under 6 on most builds', 'Custom code over plugin stacking', 'Built for PageSpeed from the start'],
    tags: ['Performance tuning', 'PageSpeed Insights', 'Clean architecture'],
  },
  {
    id: 'meta-ads-budget',
    category: 'Meta Ads',
    label: 'A real Meta Ads budget',
    teaser: 'Planning a campaign from scratch',
    icon: 'Target',
    question: 'Walk me through how you planned a real Meta Ads budget for a client.',
    answer:
      "One recent example: a client in Port Harcourt selling educational supplies — storybooks, learning toys, stationery — wholesale and retail, wanted to reach school owners, teachers and parents across Rivers, Bayelsa, Uyo, Owerri, Lagos and Abuja. Her total budget was ₦300,000. Rather than spend it all at once, I structured a ₦30,000 test phase over 6 days first, targeting those audiences and driving toward WhatsApp conversations instead of a cold landing page, then used what that test taught us about audience and creative performance before scaling into the full budget.",
    points: ['₦300,000 total budget, tested in stages', '₦30,000 / 6-day test phase before scaling', 'WhatsApp-first lead capture'],
    tags: ['Meta Ads Manager', 'Audience research', 'Budget optimization'],
  },
]
