import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async store({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    /**
     * Find a user by email. Return error if a user does
     * not exists
     */
    const user = await User.findBy('email', email)

    if (!user) {
      return response.abort('Invalid credentials')
    }

    /**
     * Verify the password using the hash service
     */
    const isPasswordValid = await hash.verify(user.password, password)

    if (!isPasswordValid) {
      return response.abort('Invalid credentials')
    }
    /**
     * Now login the user or create a token for them
     */
    // ...
  }

  async registerPage({ inertia }: HttpContext) {
    return inertia.render("register")
  }
}
