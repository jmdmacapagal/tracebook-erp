// server/api/health.get.ts
import { sql } from "drizzle-orm";
import { db } from "../db";

export default defineEventHandler(async () => {
  try {
    await db.execute(sql`select 1`);
    return { ok: true };
  } catch (e: any) {
    console.error(e.cause ?? e);
    throw e;
  }
});
