import express, { json } from "express"
import cors from "cors"
import joi from "joi"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"

const app = express()
dotenv.config()
app.use(cors())
app.use(json())

app.use(userRoutes)

app.listen(5000, () => console.log("Server running in port 5000"))