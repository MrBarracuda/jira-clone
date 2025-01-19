import {
  issuesTable,
  projectsTable,
  teamsTable,
  usersTable,
} from '@/drizzle/schema';
import { relations } from 'drizzle-orm';

export const usersRelations = relations(usersTable, ({ many }) => ({
  issues: many(issuesTable),
}));

export const teamsRelations = relations(teamsTable, ({ many }) => ({
  projects: many(projectsTable),
}));

export const projectsRelations = relations(projectsTable, ({ one, many }) => ({
  team: one(teamsTable, {
    fields: [projectsTable.teamId],
    references: [teamsTable.id],
  }),
  issues: many(issuesTable),
}));

export const issuesRelations = relations(issuesTable, ({ one }) => ({
  project: one(projectsTable, {
    fields: [issuesTable.projectId],
    references: [projectsTable.id],
  }),
  assignee: one(usersTable, {
    fields: [issuesTable.assignedTo],
    references: [usersTable.id],
  }),
}));
