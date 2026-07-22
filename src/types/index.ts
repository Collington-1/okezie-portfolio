export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  skills: string[]
  technologies: string[]
  image: string
  icon: string
}

export type ProjectCategory = 'website' | 'seo' | 'ai' | 'ecommerce' | 'meta-ads'

export interface StrategyStep {
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  client: string
  categories: ProjectCategory[]
  image: string
  role: string
  technologies: string[]
  problem: string
  solution: string
  outcome: string
  overview: string
  roleDetails: string[]
  goals: string[]
  strategy: StrategyStep[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface MetaAdsMetric {
  label: string
  value: string
}

export interface MetaAdsStrategyStep {
  icon: string
  title: string
  description: string
}

export interface MetaAdsCaseStudy {
  id: string
  title: string
  client: string
  role: string
  image: string
  tags: string[]
  cardSummary: string
  heroTitle: string
  heroDescription: string
  briefTitle: string
  briefDescription: string
  metrics: MetaAdsMetric[]
  strategy: MetaAdsStrategyStep[]
  outcomeTitle: string
  outcomeDescription: string
  highlights: { icon: string; text: string }[]
  ctaTitle: string
  ctaDescription: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  rating: number
  review: string
  photo: string
}

export type GalleryCategory =
  | 'training'
  | 'workstation'
  | 'certificates'
  | 'portrait'

export interface GalleryItem {
  id: string
  image: string
  caption: string
  category: GalleryCategory
  span?: 'row-span-2' | 'col-span-2'
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface QAItem {
  id: string
  category: string
  label: string
  teaser: string
  icon: string
  question: string
  answer: string
  points: string[]
  tags: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  image: string
  validFrom: string
  validTo: string
}

export interface TimelineEntry {
  id: string
  role: string
  company: string
  period: string
  type: string
  points: string[]
  link?: { to: string; label: string }
}
