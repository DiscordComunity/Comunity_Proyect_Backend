import { Router } from 'express';
import userRouter from './user.router';
import questionRouter from './question.router';

const router = Router();

router.use('/user', userRouter);
router.use('/question', questionRouter);

export default router;
