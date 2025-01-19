import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      DATABASE_URL: z.string().min(1).url(),
      PULSE_API_KEY: z.string().min(1).startsWith('ey'),
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
      PULSE_API_KEY: process.env.PULSE_API_KEY,
    },
  });
