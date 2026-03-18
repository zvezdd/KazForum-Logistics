import { writeFileSync } from 'fs'
import { join } from 'path'

function createPdf(text) {
  const parts = []
  parts.push('%PDF-1.0\n')
  const o1 = parts.join('').length
  parts.push('1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n')
  const o2 = parts.join('').length
  parts.push('2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n')
  const o3 = parts.join('').length
  parts.push('3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<</Font<</F1 4 0 R>>>>/Contents 5 0 R>>endobj\n')
  const o4 = parts.join('').length
  parts.push('4 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\n')
  const o5 = parts.join('').length
  const stream = `BT/F1 14 Tf 72 700 Td (${text}) Tj ET`
  parts.push(`5 0 obj<</Length ${stream.length}>>stream\n${stream}\nendstream\nendobj\n`)
  const xrefStart = parts.join('').length
  const pad = (n) => String(n).padStart(10, '0')
  parts.push('xref\n0 6\n')
  parts.push(`${pad(0)} 65535 f \n`)
  parts.push(`${pad(o1)} 00000 n \n`)
  parts.push(`${pad(o2)} 00000 n \n`)
  parts.push(`${pad(o3)} 00000 n \n`)
  parts.push(`${pad(o4)} 00000 n \n`)
  parts.push(`${pad(o5)} 00000 n \n`)
  parts.push('trailer<</Size 6/Root 1 0 R>>\n')
  parts.push('startxref\n' + xrefStart + '\n%%EOF\n')
  return parts.join('')
}

const publicDir = join(process.cwd(), 'public')
writeFileSync(join(publicDir, 'program-ru.pdf'), createPdf('Programma foruma RU'))
writeFileSync(join(publicDir, 'program-en.pdf'), createPdf('Forum programme EN'))
console.log('PDFs created.')
