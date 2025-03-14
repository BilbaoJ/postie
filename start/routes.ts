/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/register_controller')
const AuthController = () => import('#controllers/auth_controller')
const PostsController = () => import('#controllers/posts_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const UserProfileController = () => import('#controllers/user_profile_controller')
const PostLikesController = () => import('#controllers/post_likes_controller')
const FeedController = () => import('#controllers/feed_controller')

router.get('/', [FeedController, 'index'])

router.get('/register', [RegisterController, 'create']).as('register.create')
router.post('/register', [RegisterController, 'store']).as('register.store')

router.get('/login', [AuthController, 'create']).as('auth.create')
router.post('/login', [AuthController, 'store']).as('auth.store')

router.delete('/logout', [AuthController, 'destroy']).as('auth.destroy').use(middleware.auth())

router.post('/posts', [PostsController, 'store']).as('posts.store').use(middleware.auth())
router.get('/posts/:id/edit', [PostsController, 'edit']).as('posts.edit').use(middleware.auth())
router.patch('/posts/:id', [PostsController, 'update']).as('posts.update').use(middleware.auth())
router.delete('/posts/:id', [PostsController, 'destroy']).as('posts.destroy').use(middleware.auth())
router
  .post('/posts/:id/likes', [PostLikesController, 'store'])
  .as('likes.store')
  .use(middleware.auth())
router
  .delete('/posts/:id/likes', [PostLikesController, 'destroy'])
  .as('likes.destroy')
  .use(middleware.auth())

router.get('/:username', [UserProfileController, 'index']).as('user.index')
