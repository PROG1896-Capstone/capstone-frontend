import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../db/prisma";
import {userService} from "../../user/userService"

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
      const user = await userService.signIn(credentials.username, credentials.password) 
      
      // If no error and we have user data, return it
      if (!user.error) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
      },
    }),

  ],
  // pages: {
  //   signIn: "/login",
  // },
};

// const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         username: { type: "text" },
//         password: { type: "password" },
//       },
//       async authorize(credentials, req) {
//         const { username, password } = loginUSerSchema.parse(credentials);
//         const user = await prisma.user.findUnique({
//           where: { username },
//         });
//         if (!user) return null;
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) return null;
//         return user;
//       },
//     }),
//   ],
// callbacks: {
//   session({ session, token }) {
//     session.user.id = token.id;
//     session.user.username = token.username;
//     return session;
//   },
//   jwt({ token, account, user }) {
//     if (account) {
//       token.accessToken = account.access_token;
//       token.id = user.id;
//       token.username = user.username;
//       console.log({ user });
//     }
//     return token;
//   },
// },
// pages: {
//   signIn: '/login',
// },
// session: {
//   strategy: 'jwt',
// },
// secret: process.env.JWT_SECRET,
//};

// export default NextAuth(authOptions);
