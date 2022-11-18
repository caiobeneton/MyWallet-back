import { Router } from "express";
import { getBalance, inputBalace } from "../controllers/balance.controller";

const router = Router()

router.get("/balance", getBalance)
router.post("/balance", inputBalace)

export default router