import express from 'express';
import { getAllUsers } from '../controller/users';

const userRouter = express.Router()

userRouter.get('/', getAllUsers);

export default userRouter;