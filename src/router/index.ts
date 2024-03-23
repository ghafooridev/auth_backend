import userRouter from "./user";
import authRouter from "./auth";

function createRoutes(express: any) {
    const router = express.Router();

    router.use('/users', userRouter);
    router.use('/auth', authRouter);

    return router;
}

export default createRoutes