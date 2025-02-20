/* eslint-disable @typescript-eslint/no-empty-object-type */
import { env } from '@/env';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions, DefaultSession, getServerSession } from 'next-auth';
import Google from 'next-auth/providers/google';
import { db } from './db';
import { User as PrismaUser, UserRole } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession['user'];
  }

  interface User extends PrismaUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: UserRole;
  }
}

export const authOptions = {
  callbacks: {
    session: ({ token, session }) => ({
      ...session,
      user: { ...session.user, id: token.id },
    }),
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },
  },
  providers: [
    Google({
      clientId: env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(db) as never,
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 1, // 1 day
  },
} satisfies AuthOptions;

export const getSession = async () => await getServerSession(authOptions);
