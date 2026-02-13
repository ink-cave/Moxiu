#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const prompts = require('prompts')

const argv = process.argv.slice(2)
const auto = argv.includes('--yes') || argv.includes('-y')

const examplePath = path.resolve(process.cwd(), '.env.example')
if (!fs.existsSync(examplePath)) {
  console.error('.env.example not found in repo root')
  process.exit(1)
}

const raw = fs.readFileSync(examplePath, 'utf8')
const lines = raw.split(/\r?\n/)

const entries = []
for (const line of lines) {
  if (!line || line.trim().startsWith('#')) {
    entries.push({ raw: line })
    continue
  }
  const idx = line.indexOf('=')
  if (idx === -1) {
    entries.push({ raw: line })
    continue
  }
  const key = line.slice(0, idx)
  const val = line.slice(idx + 1)
  entries.push({ key, val })
}

;(async () => {
  const values = {}
  for (const e of entries) {
    if (e.raw !== undefined) continue
    if (auto) {
      values[e.key] = e.val
      continue
    }
    const response = await prompts({
      type: 'text',
      name: 'value',
      message: `Value for ${e.key}`,
      initial: e.val,
    })
    if (response.value === undefined) {
      console.error('Aborted')
      process.exit(1)
    }
    values[e.key] = response.value
  }

  const outLines = lines.map((line) => {
    if (!line || line.trim().startsWith('#')) return line
    const idx = line.indexOf('=')
    if (idx === -1) return line
    const key = line.slice(0, idx)
    return `${key}=${values[key] ?? ''}`
  })

  const outPath = path.resolve(process.cwd(), '.env.local')
  fs.writeFileSync(outPath, outLines.join('\n'))
  console.log(`.env.local created at ${outPath}`)
})()
