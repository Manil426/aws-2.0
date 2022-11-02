import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID,
      // clientSecret: process.env.GOOGLE_SECRET,
      clientId:"330577248604-uvqt6pn4avm1lhsq15ins98jhifd6r48.apps.googleusercontent.com",
      clientSecret:"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",
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)