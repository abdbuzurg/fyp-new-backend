import { Router } from 'express';
import clientFeedRouter from './clientFeedRoutes';
import driverFeedRouter from './driverFeedRouter';
import searchRouter from './searchRoutes';
import userRouter from './userRouter';

const allRoutesV1 = Router();

allRoutesV1.use('/user/', userRouter);
allRoutesV1.use('/driver/', driverFeedRouter);
allRoutesV1.use('/client/', clientFeedRouter);
allRoutesV1.use('/search/', searchRouter);

export default allRoutesV1;