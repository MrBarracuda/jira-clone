import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const projectStatusEnum = pgEnum('project_status', [
  'Active',
  'Archived',
]);
export const issueStatusEnum = pgEnum('issue_status', [
  'Backlog',
  'Todo',
  'In Progress',
  'Done',
  'Cancelled',
]);
export const priorityEnum = pgEnum('priority', [
  'No priority',
  'Low',
  'Medium',
  'High',
  'Critical',
]);
export const typeEnum = pgEnum('type', [
  'Bug',
  'Feature',
  'Improvement',
  'Task',
]);
export const roleEnum = pgEnum('role', ['Admin', 'Member', 'Viewer']);

export const pageTable = pgTable('page', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  username: varchar({ length: 50 }).notNull().unique(),
  email: varchar({ length: 100 }).notNull().unique(),
  passwordHash: varchar({ length: 255 }).notNull(),
  image: varchar({ length: 255 }),
  role: roleEnum().default('Member'),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const teamsTable = pgTable('teams', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 100 }).notNull().unique(),
  description: text(),
  createdAt: timestamp().defaultNow(),
});

export const projectsTable = pgTable('projects', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  teamId: integer()
    .notNull()
    .references(() => teamsTable.id),
  name: varchar({ length: 100 }).notNull(),
  description: text('Description'),
  status: projectStatusEnum().default('Active'),
  createdAt: timestamp('CreatedAt').defaultNow(),
});

export const issuesTable = pgTable('issues', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: integer()
    .notNull()
    .references(() => projectsTable.id, { onDelete: 'cascade' }),
  assignedTo: integer().references(() => usersTable.id, {
    onDelete: 'set null',
  }),
  title: varchar({ length: 150 }).notNull(),
  description: text(),
  status: issueStatusEnum().default('Backlog'),
  priority: priorityEnum().default('Medium'),
  type: typeEnum().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});
