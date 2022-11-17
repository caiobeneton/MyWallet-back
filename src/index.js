import express, { json } from "express"
import cors from "cors"
import { MongoClient } from "mongodb"
import joi from "joi"
import dotenv from "dotenv"

const app = express()
dotenv.config()
app.use(cors())
app.use(json())

const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
} catch (error) {
    console.log(error)
}

const db = mongoClient.db("myWallet")

app.listen(5000, () => console.log("Server running in port 5000"))