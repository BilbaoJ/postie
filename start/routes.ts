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
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/register', [RegisterController, 'create']).as('register.create')
router.post('/register', [RegisterController, 'store']).as('register.store')

router.get('/login', [AuthController, 'create']).as('auth.create')
router.post('/login', [AuthController, 'store']).as('auth.store')

router.delete('/logout', [AuthController, 'destroy']).as('auth.destroy')
