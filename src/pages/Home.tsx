import SEO from '@/components/ui/SEO'
import Hero from '@/components/home/Hero'
import StatsSection from '@/components/home/StatsSection'
import ServicesSection from '@/components/home/ServicesSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import QASection from '@/components/home/QASection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <>
      <SEO
        title="Okezie Collington | Website Developer & Digital Growth Specialist"
        description="Okezie Collington is a website developer, SEO specialist, AI automation consultant and Meta Ads expert helping brands build premium digital experiences that convert."
        path="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Okezie Collington',
          jobTitle: 'Website Developer & Digital Growth Specialist',
          url: 'https://okeziecollington.com',
          email: 'mailto:okeziecollington@yahoo.com',
          sameAs: ['https://www.linkedin.com/in/okezie-collington-521770151/'],
          knowsAbout: [
            'Website Development',
            'SEO',
            'Social Media Management',
            'Meta Ads',
            'Ecommerce Development',
            'AI Automation',
          ],
        }}
      />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <FeaturedProjects />
      <QASection />
      <TestimonialsSection />
    </>
  )
}
