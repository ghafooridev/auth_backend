import { eq } from "drizzle-orm";
import { users, User, newUser } from "../model/users"
import { db } from "../config/db"


export const getusers = async () =>
    await db.select({ id: users.id, username: users.username, email: users.email }).from(users)

export const getUserByEmail = async (email: string) =>
    await db.select().from(users).where(eq(users.email, email))

export const getUserBySessionToken = async (sessiontoken: string) =>
    await db.select().from(users).where(eq(users.sessiontoken, sessiontoken))

export const createUser = async (newUser: newUser) =>
    await db.insert(users).values(newUser).returning({ id: users.id, username: users.username, email: users.email })

export const updateUserById = async (id: number, updatedUser: User) =>
    await db.update(users).set(updatedUser).where(eq(users.id, id)).returning({ id: users.id, username: users.username, email: users.email })
