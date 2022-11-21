import { Router } from "express"
import { signUp, signIn } from "../controllers/users.controller.js"
import { signUpBodyValidation } from "../middlewares/authUserSignup.middleware.js"
import { signInBodyValidation } from "../middlewares/authUserLogin.middleware.js"

const router = Router()

router.post("/signUp", signUpBodyValidation, signUp)
router.post("/signIn", signInBodyValidation, signIn)

export default router