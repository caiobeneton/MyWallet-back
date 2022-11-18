import { balanceCollection, sessionsCollection, usersCollection } from "../database/db";

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

}