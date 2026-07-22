import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, FileText } from 'lucide-react'
import type { Project } from '@/types'
import { getImage } from '@/utils/images'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={getImage(project.image)}
          alt={`${project.title} website preview`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-end justify-center gap-3 bg-ink/0 p-5 opacity-0 transition-all duration-300 group-hover:bg-ink/50 group-hover:opacity-100">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-soft"
          >
            <FileText size={14} /> Case Study
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Visit Site <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.role}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full bg-soft px-3 py-1 text-xs text-secondary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
