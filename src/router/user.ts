import express from 'express';
import { validateUser } from '../validator/user';
import { getAllUsers, login, register } from '../controller/users';

const router = express.Router()

router.post('/auth/register', validateUser, register);
router.post('/auth/login', login);
router.get('/users', getAllUsers);

export default router;