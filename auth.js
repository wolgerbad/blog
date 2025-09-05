import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: { signIn: '/login' },
  callbacks: {
    authorized({ request, auth }) {
      return auth?.user?.email === 'wolgerbad@gmail.com';
    },
  },
});
