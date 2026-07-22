import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-glow',
  secondary: 'bg-ink text-white hover:bg-surface',
  ghost: 'bg-transparent text-ink border border-border hover:border-primary hover:text-primary',
}

const baseClasses =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 whitespace-nowrap'

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  to?: undefined
}

interface ButtonAsLink extends BaseProps {
  to: string
  type?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, icon } = props
  const classes = cn(baseClasses, variantClasses[variant], className)

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
      <motion.span
        className="pointer-events-none absolute inset-0 z-0 bg-white/15"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2.5, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ borderRadius: '9999px' }}
      />
    </>
  )

  if ('to' in props && props.to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={props.to} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
