import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ContactFormValues {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

const serviceOptions = [
  'Website Development',
  'AI Automation & Training',
  'SEO & Social Media Management',
  'Meta Ads',
  'Ecommerce Development',
  'Something else',
]

const budgetOptions = ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet']

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function onSubmit(data: ContactFormValues) {
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            {...register('name', { required: 'Your name is required' })}
            className="form-input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Your email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
            className="form-input"
            placeholder="jane@company.com"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input id="phone" {...register('phone')} className="form-input" placeholder="+1 234 567 890" />
        </Field>
        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <input id="company" {...register('company')} className="form-input" placeholder="Company name" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Services Needed" htmlFor="service" error={errors.service?.message}>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className="form-input"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget" htmlFor="budget" error={errors.budget?.message}>
          <select id="budget" {...register('budget')} className="form-input" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Tell me a bit about your project' })}
          className="form-input resize-none"
          placeholder="Tell me about your project..."
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} icon={isSubmitting ? undefined : <Send size={16} />}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-emerald-600"
        >
          <CheckCircle2 size={16} /> Message sent — I'll get back to you within 24 hours.
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-primary"
        >
          <TriangleAlert size={16} /> Something went wrong — please email me directly at
          okeziecollington@yahoo.com.
        </motion.p>
      )}
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-primary">{error}</p>}
    </div>
  )
}
