// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ||"",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//     }),
    
//   ],
// }

// export default NextAuth(authOptions)

/* eslint-disable @typescript-eslint/ban-ts-comment */
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET ||"",
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_ID ||"",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),

    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: undefined,
    //   async authorize(credentials) {
    //     try {
    //       // Get user data based on the credentials
    //       const userData = await UserApi.verifyOtp({
    //         otp_id: credentials.otpId,
    //         otp_code: credentials.otpCode,
    //       })
    //       // Throw error if no data is found
    //       if (userData.length <= 0) {
    //         throw new Error('No user exists for this email')
    //       }

    //       if (userData) {
    //         const user = {
    //           id: userData.user.id,
    //           ...userData,
    //         }
    //         return user
    //       }

    //       throw new Error('Invalid Credentials')
    //     } catch (e) {
    //       // Redirecting to the login page with error message in the URL
    //       throw new Error(e.details)
    //     }
    //   },
    // }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  pages: {
    signIn: '/auth/login', // Displays signin buttons
    signOut: '/', // Displays form with sign out button
    error: '/auth/error', // Error code passed in query string as ?error=
  },

  // callbacks: {
  //   async jwt({ token, user, account }) {
  //     if (account?.access_token) {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
  //       )
  //       const data = await response.json()
  //       token.jwt = data.jwt
  //       token.id = data.user.id.toString()
  //     }

  //     if (account?.provider === 'credentials') {
  //       token.id = user.id.toString()
  //       // @ts-ignore
  //       token.jwt = user.jwt
  //     }
  //     return Promise.resolve(token)
  //   },

  //   async session({ session, token }) {
  //     session.user.jwt = token.jwt
  //     session.user.id = token.id

  //     return Promise.resolve(session)
  //   },
  // },
})