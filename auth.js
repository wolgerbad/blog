import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from './app/generated/prisma';
import { nextCookies } from 'better-auth/next-js';
import { admin } from 'better-auth/plugins';

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin(), nextCookies()],
});
