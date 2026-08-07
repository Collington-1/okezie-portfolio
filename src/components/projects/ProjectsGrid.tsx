import { FolderKanban } from 'lucide-react'
import type { Project } from '@/types'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-border py-20 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-soft text-primary">
          <FolderKanban size={20} />
        </span>
        <p className="mt-4 text-base font-semibold text-ink">Nothing in this category yet</p>
        <p className="mt-1 max-w-xs text-sm text-muted">New work gets added here as soon as it ships — check back soon.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
