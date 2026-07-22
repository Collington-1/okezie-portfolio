import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const targets = [
  { dir: 'src/assets/images/portraits', width: 1400, quality: 82 },
  { dir: 'src/assets/images/projects', width: 1600, quality: 78 },
  { dir: 'src/assets/images/gallery', width: 1400, quality: 78 },
  { dir: 'src/assets/images/certifications', width: 1000, quality: 85 },
]

for (const { dir, width, quality } of targets) {
  const files = readdirSync(dir).filter((f) => ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG'].includes(extname(f)))
  for (const file of files) {
    const inputPath = join(dir, file)
    const outputPath = join(dir, `${basename(file, extname(file))}.webp`)
    const img = sharp(inputPath).rotate()
    const meta = await img.metadata()
    const resizeWidth = meta.width && meta.width > width ? width : undefined
    await img
      .resize(resizeWidth ? { width: resizeWidth } : undefined)
      .webp({ quality })
      .toFile(outputPath)
    unlinkSync(inputPath)
    const before = statSync(outputPath).size
    console.log(`${inputPath} -> ${outputPath} (${(before / 1024).toFixed(0)}kb)`)
  }
}

// Logo: keep transparent PNG but compress
await sharp('src/assets/images/logo/Collington Logo.png')
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('src/assets/images/logo/collington-logo.opt.png')
console.log('Logo optimized')
