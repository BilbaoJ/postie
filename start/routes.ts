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
const FeedController = () => import('#controllers/feed_controller')

router.get('/', [FeedController, 'index'])

router.get('/register', [RegisterController, 'create']).as('register.create')
router.post('/register', [RegisterController, 'store']).as('register.store')

router.get('/login', [AuthController, 'create']).as('auth.create')
router.post('/login', [AuthController, 'store']).as('auth.store')

router.delete('/logout', [AuthController, 'destroy']).as('auth.destroy').use(middleware.auth())

router.post('/posts', [PostsController, 'store']).as('posts.store').use(middleware.auth())
