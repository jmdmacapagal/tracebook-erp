import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const config = useRuntimeConfig();
const client = postgres(config.supabaseDatabaseUrl, { prepare: false });

export const db = drizzle({ client });
