import express from 'express';rs/u
import { logIn, signUp, testJWT } from '../controlleserController.js';

const userRouter = express.Router();

userRouter.post('/sign-up', signUp);
userRouter.post('/login', logIn);
userRouter.post('/testJWT', testJWT);

export default userRouter;
