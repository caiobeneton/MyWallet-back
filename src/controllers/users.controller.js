import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { usersCollection, sessionsCollection } from "../database/db";


export async function signUp(req, res) {
  const user = req.body;

  const hashPassword = bcrypt.hashSync(user.password, 10);

  try {
    await usersCollection.insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
    const { email } = req.body;
    const token = uuidV4();
  
    try {
      const userExists = await usersCollection.findOne({ email });
      await sessionsCollection.insertOne({ token, userId: userExists._id });
  
      res.send({ token });
    } catch (err) {
      res.sendStatus(500);
    }
  }