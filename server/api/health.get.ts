import { sql } from 'drizzle-orm'
import { db } from '../db'

export default defineEventHandler(async () => {
  try {
    await db.execute(sql`select 1`)
    return { ok: true }
  } catch (e) {
    // Drizzle wraps driver errors; the real reason is in `cause`
    console.error((e as Error).cause ?? e)
    throw e
  }
})
