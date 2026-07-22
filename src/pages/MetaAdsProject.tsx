import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import MetaAdsCard from '@/components/metaAds/MetaAdsCard'
import { getImage } from '@/utils/images'
import { metaAdsProjects } from '@/data/metaAdsProjects'

export default function MetaAdsProject() {
  return (
    <>
      <SEO
        title="Meta Ads Case Studies | Okezie Collington"
        description="Real Meta Ads campaigns Okezie Collington has planned and run — the research, the strategy, and the actual numbers behind each one."
        path="/meta-ads-project"
      />

      <section className="pb-16 pt-10 sm:pt-16">
        <Container className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Meta Ads Case Studies
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Campaigns built on research, not guesswork.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Every campaign here started with real research into what was already working, then built a strategy
                around the client&rsquo;s actual offer — with the real numbers to show for it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-xs">
            <div className="aspect-square w-full overflow-hidden rounded-xl2 shadow-lift">
              <img
                src={getImage('portrait-casual-3')}
                alt="Okezie Collington reviewing a Meta Ads campaign"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {metaAdsProjects.map((study) => (
              <MetaAdsCard key={study.id} study={study} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
