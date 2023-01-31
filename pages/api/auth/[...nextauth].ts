import NextAuth, { DefaultSession } from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../db";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  callbacks: {
    //   async signIn(params){
    //     // this is where i would check if user exists on database, return true for valid false for invalid.
    //   }

    async session({ session, user }: { session: any, user: any }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session
    }
  }
};

export default NextAuth(authOptions)
