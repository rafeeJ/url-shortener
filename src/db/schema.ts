import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const urlsTable = pgTable("urls", {
  id: serial("id").primaryKey(),
  shortCode: varchar("short_code", { length: 10 }).notNull().unique(),
  originalUrl: varchar("original_url", { length: 2048 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  visitCount: integer("visit_count").notNull().default(0),
});
