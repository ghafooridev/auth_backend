import express from 'express';
import { validateUser } from '../validator/user';
import { login, register } from '../controller/users';

const authRouter = express.Router()

authRouter.post('/register', validateUser, register);
authRouter.post('/login', login);

export default authRouter;