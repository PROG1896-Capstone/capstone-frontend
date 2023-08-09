import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/utils/prisma";
import { userService } from "../../user/userService";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        return await userService.signIn(
          credentials.userName,
          credentials.password
        );
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, token, user }) => {
      session.user.id = token.id
      if (token.role) {
        session.user.role = token.role
        return session
      }
      return session
    },
    jwt: ({ token, user }) => {
      // console.log("JWT Callback", { token});
      if (user) {
        if (user.role) {
          token.role = user.role;
        }
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    signUp: "/signup",
  },
};
