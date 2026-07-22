import sharp from 'sharp'

// Favicon: logo mark on brand-ink rounded square
await sharp({
  create: { width: 512, height: 512, channels: 4, background: '#111111' },
})
  .composite([
    {
      input: await sharp('src/assets/images/logo/collington-logo.png')
        .resize({ width: 340 })
        .toBuffer(),
      gravity: 'center',
    },
  ])
  .png()
  .toFile('public/favicon.png')

await sharp('public/favicon.png').resize(180, 180).toFile('public/apple-touch-icon.png')

// OG image: portrait cover-cropped to 1200x630 with brand-ink side bar + name
const portrait = await sharp('src/assets/images/portraits/portrait-studio-formal.webp')
  .resize({ width: 630, height: 630, fit: 'cover', position: 'top' })
  .toBuffer()

const svgText = `
<svg width="1200" height="630">
  <rect width="1200" height="630" fill="#111111"/>
  <text x="60" y="260" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">Okezie</text>
  <text x="60" y="335" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#F95F54">Collington</text>
  <text x="62" y="385" font-family="Arial, sans-serif" font-size="24" fill="#ffffffb3">Website Developer &#183; SEO Specialist</text>
  <text x="62" y="420" font-family="Arial, sans-serif" font-size="24" fill="#ffffffb3">AI Automation Consultant</text>
</svg>`

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#111111' } })
  .composite([
    { input: Buffer.from(svgText), left: 0, top: 0 },
    { input: portrait, left: 570, top: 0 },
  ])
  .jpeg({ quality: 85 })
  .toFile('public/og-image.jpg')

console.log('Brand assets generated.')
