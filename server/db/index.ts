import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const config = useRuntimeConfig()
const client = postgres(config.databaseUrl, { prepare: false })

export const db = drizzle({ client, casing: 'snake_case' })
