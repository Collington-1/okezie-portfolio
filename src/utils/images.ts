const portraitModules = import.meta.glob('../assets/images/portraits/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const projectModules = import.meta.glob('../assets/images/projects/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const galleryModules = import.meta.glob('../assets/images/gallery/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const certModules = import.meta.glob('../assets/images/certifications/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const testimonialModules = import.meta.glob('../assets/images/testimonials/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const caseStudyModules = import.meta.glob('../assets/images/case-studies/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const digitalTrainingModules = import.meta.glob('../assets/images/digital-training/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function toMap(modules: Record<string, string>): Record<string, string> {
  const map: Record<string, string> = {}
  for (const path in modules) {
    const key = path.split('/').pop()!.replace(/\.webp$/, '')
    map[key] = modules[path]
  }
  return map
}

const images: Record<string, string> = {
  ...toMap(portraitModules),
  ...toMap(projectModules),
  ...toMap(galleryModules),
  ...toMap(certModules),
  ...toMap(testimonialModules),
  ...toMap(caseStudyModules),
  ...toMap(digitalTrainingModules),
}

export function getImage(key: string): string {
  const src = images[key]
  if (!src && import.meta.env.DEV) {
    console.warn(`[getImage] No image found for key "${key}"`)
  }
  return src ?? ''
}
