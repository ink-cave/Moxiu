#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const envPath = process.argv[2] || '.env.local'
const absPath = path.resolve(process.cwd(), envPath)
if (!fs.existsSync(absPath)) {
  console.error(`Env file not found: ${absPath}`)
  process.exit(1)
}

dotenv.config({ path: absPath })

const required = ['NODE_ENV', 'PORT', 'API_URL']
const missing = required.filter((k) => !process.env[k])
if (missing.length) {
  console.error('Missing required env vars:', missing.join(', '))
  process.exit(1)
}

console.log('All required env vars are present.')
process.exit(0)
