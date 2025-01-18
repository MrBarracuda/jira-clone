import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const pageTable = pgTable('page', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }),
  email: varchar({ length: 255 }).notNull().unique(),
});
