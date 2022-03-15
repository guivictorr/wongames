import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate
} from '.'

describe('Validators', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should validate valid email', () => {
      const values = { email: 'invalid-email', password: '1234' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" must be a valid email'
      })
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = { username: '', email: '', password: '' }

      expect(signUpValidate(values)).toMatchObject({
        username: '"username" is not allowed to be empty',
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should validate valid email', () => {
      const values = {
        username: 'username',
        email: 'invalid-email',
        password: '1234'
      }

      expect(signUpValidate(values)).toMatchObject({
        email: '"email" must be a valid email'
      })
    })

    it('should validate valid username', () => {
      const values = {
        username: 'hi',
        email: '',
        password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        username: '"username" length must be at least 5 characters long'
      })
    })

    it('should validate confirm_password', () => {
      const values = {
        username: 'username',
        email: 'email@email.com',
        password: '1234',
        confirm_password: '12345'
      }

      expect(signUpValidate(values)).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "confirm password does not match with password",
        }
      `)
    })
  })

  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '' }

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })

    it('should validate valid email', () => {
      const values = { email: 'invalid-email' }

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" must be a valid email'
      })
    })
  })

  describe('resetValidate()', () => {
    it('should validate empty fields', () => {
      const values = { password: '', confirm_password: '' }

      expect(resetValidate(values)).toMatchObject({
        password: '"password" is not allowed to be empty'
      })
    })

    it('should validate confirm_password when empty', () => {
      const values = { password: '123', confirm_password: '' }

      expect(resetValidate(values)).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "\\"confirm_password\\" is not allowed to be empty",
        }
      `)
    })

    it('should validate confirm_password', () => {
      const values = {
        password: '1234',
        confirm_password: '12345'
      }

      expect(resetValidate(values)).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "confirm password does not match with password",
        }
      `)
    })
  })
})
