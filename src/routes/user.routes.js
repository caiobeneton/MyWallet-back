import { Router } from "express"
import { signUp, signIn } from "../controllers/users.controller.js"
import { signUpBodyValidation } from "../middlewares/authUserSignup.middleware.js"
import { signInBodyValidation } from "../middlewares/authUserLogin.middleware.js"

const router = Router()

router.post("/signup", signUpBodyValidation, signUp)
router.post("/signin", signInBodyValidation, signIn)

export default router