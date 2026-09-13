import type { Publication } from '@/types'

export const publications: Publication[] = [
  {
    id: 'guinea-corn-millet-drilling-mud',
    title: 'Synthesis of Polymer Drilling Mud Using Blend of Guinea Corn and Millet Starches',
    authors: 'Chike, K. O.; Okezie, C. C.',
    role: 'Co-author — research and lab work',
    journal: 'International Journal of Scientific Engineering and Science (IJSES)',
    citation: 'Volume 5, Issue 10, pp. 1–7',
    year: '2021',
    identifier: 'ISSN (Online) 2456-7361',
    summary:
      "Oil and gas wells are drilled using a fluid called drilling mud — it cools the drill bit, carries rock cuttings to the surface, and keeps the walls of the well from collapsing. One of the biggest jobs a drilling mud has to do is stop too much of its own fluid from leaking into the surrounding rock, which is usually controlled with chemically synthesized starch additives that can be expensive and environmentally harmful. This study tested a natural alternative: a starch blend extracted from guinea corn (sorghum) and millet, two crops grown locally in Nigeria, formulated into a new drilling mud and tested head-to-head against a standard industrial additive blend used across the drilling industry.",
    methodology:
      "Starch was extracted from guinea corn and millet by soaking, grinding and sieving the grains, then dried. The two starches were blended and pre-gelatinized through an extrusion process — with no added solvents or chemicals — before being mixed into a bentonite clay-based drilling mud. The resulting mud was tested against the industry-standard CMS:HPS mud using the American Petroleum Institute's standard filter-loss method, across a temperature range of 25°C to 320°C.",
    keyFindings: [
      'At 320°C, the new starch blend lost only 260ml of fluid, compared to 739ml for the standard industrial mud — roughly a third of the fluid loss.',
      'It also showed better sorptivity (33.25 vs 17.10 at 320°C), meaning it builds a tighter, more effective filter cake on the well wall — exactly what prevents fluid loss and formation damage.',
      'Performance held up consistently as temperature rose from 25°C to 320°C, showing strong thermal stability at depths where wells genuinely get hot.',
    ],
    whyItMatters:
      "Two crops grown locally in Nigeria, processed with no added chemicals, outperformed an imported synthetic additive on the exact metric that determines well integrity. That's a cheaper, non-toxic, and more sustainable path to a material the drilling industry depends on.",
    metrics: [
      { label: 'Fluid loss at 320°C — new blend', value: '260 ml' },
      { label: 'Fluid loss at 320°C — standard mud', value: '739 ml' },
      { label: 'Sorptivity at 320°C — new blend', value: '33.25' },
      { label: 'Temperature range tested', value: '25°C – 320°C' },
    ],
    pdfUrl: '/Publication-Guinea-Corn-Millet-Starch-Drilling-Mud.pdf',
  },
  {
    id: 'sweet-potato-pectin-drilling-mud',
    title: 'Filtration Behaviors of Polymer Drilling Mud Prepared with Pectin from Sweet Potatoes (Ipomoea Batatas) Peels',
    authors: 'Chike, K. O.; Iheaturu, N. C.; Okezie, C. C.; Uzoukwu, C. S.',
    role: 'Co-author — research and lab work',
    journal: 'American Journal of Engineering Research (AJER)',
    citation: 'Volume 11, Issue 7, pp. 8–13',
    year: '2022',
    identifier: 'e-ISSN 2320-0847 · p-ISSN 2320-0936',
    summary:
      "Sweet potato peels are normally just food-processing waste — thrown out, or at best fed to livestock. This study asked whether that waste could become something genuinely useful: pectin, a natural gelling carbohydrate found in the peel, was extracted and processed into a biodegradable polymer drilling mud. It was tested against a standard commercial drilling additive at both room temperature and a much hotter 220°C, simulating real downhole well conditions.",
    methodology:
      'Sweet potato peels were shredded, dried, and treated with dilute hydrochloric acid to extract pectin, which was then neutralized, precipitated in ethanol, and pre-gelatinized using calcium water. The resulting pectin polymer was mixed into a bentonite-based drilling mud and compared against a standard hydroxypropyl-starch (HPS) mud, using filter-press testing at 25°C and 220°C.',
    keyFindings: [
      'The pectin-based mud consistently lost less fluid than the standard mud at both temperatures tested.',
      'It showed slightly better sorptivity at both 25°C (25.6 vs 24.45) and 220°C (19.78 vs 19.21).',
      'It remained thermally stable up to 220°C — realistic for use in deep wells with high bottom-hole temperatures.',
    ],
    whyItMatters:
      'This turns a food-industry waste product into a genuinely useful, biodegradable industrial material — cutting both the cost and the environmental footprint of drilling chemicals, while pointing toward a circular use for food waste that would otherwise be discarded.',
    metrics: [
      { label: 'Fluid loss at 220°C — pectin mud', value: '243 ml' },
      { label: 'Fluid loss at 220°C — standard mud', value: '255 ml' },
      { label: 'Sorptivity at 25°C — pectin mud', value: '25.6' },
      { label: 'Test temperatures', value: '25°C & 220°C' },
    ],
    pdfUrl: '/Publication-Sweet-Potato-Pectin-Drilling-Mud.pdf',
  },
]
