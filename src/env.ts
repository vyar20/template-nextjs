import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const serverEnv = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_GOOGLE_CLIENT_ID: z.string(),
  NEXTAUTH_GOOGLE_CLIENT_SECRET: z.string(),
  UNSPLASH_ACCESS_KEY: z.string(),
});

const clientEnv = z.object({});

const objectEnv = Object.assign({}, serverEnv.shape, clientEnv.shape);

const runtimeEnv = Object.keys(objectEnv).reduce((acc, key) => {
  return { ...acc, [key]: process.env[key] };
}, {});

export const env = createEnv({
  server: serverEnv.shape,
  client: clientEnv.shape,
  clientPrefix: 'NEXT_PUBLIC_',
  runtimeEnv,
});

type ServerEnv = z.infer<typeof serverEnv>;
type ClientEnv = z.infer<typeof clientEnv>;

export type CustomEnv = ServerEnv & ClientEnv;
