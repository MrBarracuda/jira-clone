import 'server-only';

import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { withPulse } from '@prisma/extension-pulse/node';
import { keys } from './keys';

const acceleratedDb = new PrismaClient().$extends(
  withAccelerate()
) as unknown as PrismaClient;

export const database = acceleratedDb.$extends(
  withPulse({ apiKey: keys().PULSE_API_KEY })
) as unknown as PrismaClient;

export * from '@prisma/client';
