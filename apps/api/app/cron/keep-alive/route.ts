import { database, eq } from '@repo/database';
import { pageTable } from '@repo/database/drizzle/schema';

export const GET = async () => {
  const [newPage] = await database
    .insert(pageTable)
    .values({
      name: 'cron-temp',
      email: 'test@test.com',
    })
    .returning(); // Returns the inserted row(s) for further use

  await database.delete(pageTable).where(eq(pageTable.id, newPage.id));

  return new Response('OK', { status: 200 });
};
