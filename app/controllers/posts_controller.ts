import { PostValidator } from '#validators/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async store({ auth, request, session, response }: HttpContext) {
    const { content } = await request.validateUsing(PostValidator)
    await auth.user?.related('posts').create({ content })
    session.flash({
      notification: {
        type: 'success',
        message: 'Post created',
      },
    })

    return response.redirect().back()
  }
}
