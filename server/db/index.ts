// server/db/index.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const config = useRuntimeConfig();
const client = postgres(config.supabaseUrl, { prepare: false });

export const db = drizzle({ client });
