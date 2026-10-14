import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

export default defineConfig({
  out: './server/db/migrations',
  schema: './server/db/schema.ts',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: process.env.SUPABASE_DATABASE_URL!
  }
})
