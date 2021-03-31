import {NextFunction, Request, Response} from 'express';
import { verify } from 'jsonwebtoken'
import { User } from '../entity/User';
import { errorHandler } from '../utils/errorResponse';

const Auth = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token){
      throw new Error("User not authenticated");
    }
    const decodedToken: any = verify(token!, "secret");
    const  userId = decodedToken.userId;
    if (!await User.findOne(userId)) {
      throw new Error("Unauthorized user");
    }
    req.body.userId = userId;
    next();
  } catch (error) {
    res.send(errorHandler(error));
  }
}

export default Auth;