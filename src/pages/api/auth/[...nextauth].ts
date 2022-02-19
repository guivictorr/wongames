import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { GenericObject } from 'next-auth/_utils'

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams(credentials)
          }
        )

        const data = await response.json()

        if (!data.user) {
          return null
        }

        return { ...data.user, jwt: data.jwt }
      }
    })
  ],
  callbacks: {
    session: async (session: GenericObject, user: GenericObject) => {
      session.jwt = user.jwt
      session.id = user.id
      return Promise.resolve(session)
    },
    jwt: async (token: GenericObject, user: GenericObject) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
