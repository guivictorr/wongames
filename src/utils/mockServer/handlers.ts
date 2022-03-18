import { rest } from 'msw'

type LoginReqBody = {
  email: string
}

type ResetReqBody = {
  code: string
  password: string
  confirm_password: string
}

export const handlers = [
  rest.post<LoginReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    (req, res, ctx) => {
      const { email } = req.body

      if (email === 'fail@gmail.com') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'This email does not exist'
                  }
                ]
              }
            ]
          })
        )
      }

      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      )
    }
  ),
  rest.post<ResetReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    (req, res, ctx) => {
      const { code } = req.body

      if (code === 'wrong') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'This code is invalid'
                  }
                ]
              }
            ]
          })
        )
      }

      return res(
        ctx.status(200),
        ctx.json({
          user: {
            email: 'valid@gmail.com'
          }
        })
      )
    }
  )
]
