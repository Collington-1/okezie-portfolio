import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import { projects } from '@/data/projects'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).concat(projects.slice(0, 6)).slice(0, 6)
  const unique = Array.from(new Map(featured.map((p) => [p.id, p])).values())

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Recent Work" title="Featured projects" />
          <Button to="/projects" variant="ghost" icon={<ArrowRight size={16} />}>
            All Projects
          </Button>
        </div>
        <div className="mt-14">
          <ProjectsGrid projects={unique} />
        </div>
      </Container>
    </section>
  )
}
