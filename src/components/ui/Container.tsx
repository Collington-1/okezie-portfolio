import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export default function Container({ children, className, as = 'div' }: ContainerProps) {
  const Tag = as
  return <Tag className={cn('mx-auto w-full max-w-container container-px', className)}>{children}</Tag>
}
