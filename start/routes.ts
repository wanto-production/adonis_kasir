/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import("#controllers/auth_controller")
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.group(() => {
  router.get("/register", [AuthController, "registerPage"])
}).prefix("/auth")

router.group(() => {
  router.post('/register', [AuthController, "registerAction"])
}).prefix('/api')
