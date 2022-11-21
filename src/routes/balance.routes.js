import { Router } from "express";
import { getBalance, inputBalance } from "../controllers/balance.controller.js";

const router = Router()

router.get("/balance", getBalance)
router.post("/balance", inputBalance)

export default router