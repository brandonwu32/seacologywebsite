import { redirect } from 'next/navigation'
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({request, auth }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = !(nextUrl.pathname.startsWith('/welcome'))

      if (isOnDashboard) {
        return isLoggedIn; // true if logged in, false if not
      }

      // If the user is logged in but is not on a dashboard route, just return true.
      // Handle the redirect logic elsewhere (e.g., in a page component or a separate middleware).
      return isLoggedIn;
    },

  },
  providers: [], // Add providers with an empty array for now
};