import { balanceCollection, sessionsCollection, usersCollection } from "../database/db.js";

export async function getBalance(req, res) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const sessions = await sessionsCollection.findOne({ token })
        const user = await usersCollection.findOne({ _id: sessions.userId })
        const balance = await balanceCollection.find({user}).toArray()

        res.send(balance)
    } catch (error) {
        console.log(error)
    }
}

export async function inputBalance(req, res) {
    const { description, value, type } = req.body
    const {Authorization} = req.headers

    const token = Authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const sessions = await sessionsCollection.findOne({token})

        const user = await usersCollection.findOne({ _id: sessions.userId })

        const newInput = {
            description,
            value,
            type,
            user: user._id
        }

        await balanceCollection.insertOne({newInput})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
}