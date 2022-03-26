// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

useSession.mockImplementation(() => [
  {
    jwt: '123',
    user: {
      email: 'email@gmail.com'
    }
  }
])
