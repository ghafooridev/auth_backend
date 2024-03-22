import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    salt: text('salt'),
    sessiontoken: text('sessiontoken')
});

export type User = InferSelectModel<typeof users>
export type newUser = InferInsertModel<typeof users>;

