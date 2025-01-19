import 'server-only';

import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { withPulse } from '@prisma/extension-pulse';
import { keys } from './keys';

export const database = new PrismaClient()
  .$extends(withAccelerate())
  .$extends(withPulse({ apiKey: keys().PULSE_API_KEY }));

export * from '@prisma/client';
