import 'server-only';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { keys } from './keys';

//TODO deprecated

// import ws from 'ws';
// neonConfig.webSocketConstructor = ws;

const client = neon(keys().DATABASE_URL);

export const database = drizzle({ client });

export * from 'drizzle-orm';
