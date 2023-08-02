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
        const user = await userService.signIn(
          credentials.username,
          credentials.password
        );
        // If no error and we have user data, return it
        if (!user.error) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      token.role = user.role;
      console.log("JWT Callback", { token, user });
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
};
