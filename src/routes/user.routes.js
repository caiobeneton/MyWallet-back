import { Router } from "express"
import { signUp, signIn } from "../controllers/users.controller.js"

const router = Router()

router.post("/signUp", signUp)
router.post("signIn", signIn)

export default router