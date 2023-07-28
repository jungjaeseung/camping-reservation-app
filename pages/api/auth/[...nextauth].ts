import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("아이디와 비밀번호를 입력해주세요.");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("가입된 정보가 없습니다.");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("비밀번호가 틀립니다.");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
