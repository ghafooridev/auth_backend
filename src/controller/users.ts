import { DOMAIN } from "../constants";
import { SESSION_TOKEN } from "../constants";
import { createUser, getUserByEmail, getusers, updateUserById } from "../service/users";
import { Request, Response, NextFunction } from "express"
import { authentication, random } from "../helper";

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        // if (!username || !email || !password) res.sendStatus(401);  // it handle with validator middleware

        const result = await getUserByEmail(email)

        if (!result || result.length > 0) {
            res.sendStatus(400)
        }

        const salt = random();

        const user = await createUser({
            username,
            salt,
            email,
            password: authentication(salt, password)
        })
        return res.status(201).json(user)
    }
    catch (e) {
        return res.sendStatus(400)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) res.sendStatus(400);

        const result = await getUserByEmail(email)
        if (!result || result.length === 0) {
            res.sendStatus(400)
        }

        const user = result[0];

        const expectedHash = authentication(user.salt, password)
        if (user.password !== expectedHash) return res.sendStatus(400)

        user.sessiontoken = authentication(random(), user.password)

        const updatedUser = await updateUserById(user.id, user)

        res.cookie(SESSION_TOKEN, user.sessiontoken, { domain: DOMAIN, path: '/', expires: new Date(Date.now() + 900000) })

        return res.status(200).json(updatedUser)
    }
    catch (e) {
        return res.sendStatus(400)
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getusers()

        return res.status(200).json(users)
    }
    catch (e) {

        return res.status(400).send(e)
    }
}

