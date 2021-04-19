import { Router } from 'express';
import Auth from '../middlewares/Auth';
import * as UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.get("/", Auth, UserController.getUsers);
userRouter.get("/myself", Auth, UserController.myself);
userRouter.post("/", UserController.createUser);
userRouter.put("/:id", Auth, UserController.updateUser);
userRouter.delete("/:id", Auth, UserController.deleteUser);
userRouter.post("/login", UserController.login);

export default userRouter;