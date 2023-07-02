import prisma from "@/app/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import z from "zod";
import NextAuth from 'next-auth/next';


const loginUSerSchema = z.object({
  password: z.string().min(5, "Password should be minimum 5 characters"),
});

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = loginUSerSchema.parse(credentials);
        const user = await prisma.user.findUnique({
          where: { username },
        });
        if (!user) return null;
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.username = user.username;
        console.log({ user });
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
