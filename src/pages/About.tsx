import SEO from '@/components/ui/SEO'
import Intro from '@/components/about/Intro'
import CareerJourney from '@/components/about/CareerJourney'
import SkillsSection from '@/components/about/SkillsSection'
import EducationCerts from '@/components/about/EducationCerts'
import WhyHireMe from '@/components/about/WhyHireMe'

export default function About() {
  return (
    <>
      <SEO
        title="About Okezie Collington | Website Developer & Digital Growth Specialist"
        description="Seven years of experience in website development, SEO, social media and AI automation. Learn about Okezie Collington's career journey, skills and credentials."
        path="/about"
      />
      <Intro />
      <CareerJourney />
      <SkillsSection />
      <EducationCerts />
      <WhyHireMe />
    </>
  )
}
