import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { stats } from '@/data/stats'

export default function StatsSection() {
  return (
    <section className="border-y border-border bg-soft py-14">
      <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center"
          >
            <p className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </Container>
    </section>
  )
}
