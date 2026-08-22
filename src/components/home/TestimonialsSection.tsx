import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/testimonials'
import { getImage } from '@/utils/images'

export default function TestimonialsSection() {
  return (
    <section className="bg-soft py-24 lg:py-32">
      <Container>
        <SectionHeader eyebrow="Client Feedback" title="What people say" align="center" className="mx-auto" />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="testimonials-swiper !pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">&ldquo;{t.review}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={getImage(t.photo)}
                      alt={t.name}
                      className="h-11 w-11 shrink-0 rounded-full object-cover object-top ring-2 ring-primary/15"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">{t.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
