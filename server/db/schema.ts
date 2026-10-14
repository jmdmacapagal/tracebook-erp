import {
  pgTable,
  bigint,
  text,
  numeric,
  boolean,
  timestamp,
  pgEnum
} from 'drizzle-orm/pg-core'

export const locationTypeEnum = pgEnum('location_type', [
  'warehouse',
  'branch',
  'in_transit',
  'damaged'
])

export const products = pgTable('products', {
  id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  sku: text().notNull().unique(),
  barcode: text().unique(),
  name: text().notNull(),
  unit: text().notNull().default('pc'),
  price: numeric({ precision: 12, scale: 2 }).notNull().default('0'),
  cost: numeric({ precision: 12, scale: 2 }).notNull().default('0'),
  active: boolean().notNull().default(true),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date())
})

export const suppliers = pgTable('suppliers', {
  id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  contact: text(),
  phone: text(),
  email: text(),
  active: boolean().notNull().default(true),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date())
})

export const locations = pgTable('locations', {
  id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  code: text().notNull().unique(),
  type: locationTypeEnum().notNull(),
  name: text().notNull(),
  address: text(),
  active: boolean().notNull().default(true),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date())
})
