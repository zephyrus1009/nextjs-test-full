//file này sẽ xử lý toàn bộ quá trình auth, tức là sign in, create user.

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // đoạn code này sẽ liên tục update data của user đang online để phục vụ cho session đang running.
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    // đoạn code này hỗ trợ việc đăng nhập hoặc tạo new user.
    async signIn({ profile }) {
      try {
        await connectToDB();

        // kiểm tra xem user đã tồn tại chưa bằng cách tìm kiếm email
        const userExists = await User.findOne({ email: profile.email });

        // nếu user chưa tồn tại thì tạo new user
        //tạo new user với email, username, image. username thì sẽ bỏ dấu cách và chuyển hết về chữ thường
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    }
  }
})

export { handler as GET, handler as POST };
