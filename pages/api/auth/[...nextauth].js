import NextAuth from "next-auth";
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from 'next-auth/providers/email'
import User from "../../../models/user";
import { connectMongoDB } from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;

        try {
          // check to see if user exists
          await connectMongoDB();

          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });
            if (res.ok) {
              return user;
            }
          } else {
            console.log("User Exists");
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
});
