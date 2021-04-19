import {Request, Response} from 'express';
import argon2 from 'argon2';
import { User } from '../entity/User';
import { errorHandler } from '../utils/errorResponse';
import { sign, verify } from 'jsonwebtoken';

export const getUsers = async(req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
}

export const login = async(req: Request, res: Response) => {
  console.log("Logging in user");
  try {
    const user = await User.findOne({ username: req.body.username});
    if (!user) {
      throw new Error("Invalid credentials: User does not exist");
    }
    if (!await argon2.verify(user.password, req.body.password)){
      throw new Error("Invalid credentials: Incorrect Password");
    }

    res.send({
      success: true,
      message: "Logged in",
      token: sign({ userId: user.id }, "secret", { expiresIn: "60m"})
    });

  } catch(error) {
    res.send(errorHandler(error));
  }
}

export const createUser = async(req: Request, res: Response) => {
  try {
    if (await User.findOne({ email: req.body.email })) {
      throw new Error("User exist with the same email");
    }
    if (await User.findOne({ username: req.body.username})){
      throw new Error("User exist with the same username");
    }
    const hashedPassword = await argon2.hash(req.body.password);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNumber: req.body.mobileNumber,
      superUser: false
    }).save();

    res.send({
      success: true,
      message: "User has been created"
    });
  } catch(error) {
    console.log(error);
    res.send(errorHandler(error));
  }
}

export const updateUser = async(req: Request, res: Response) => {
  try {
    const user = await User.findOne(+req.params.id);
    if (!user){
      throw new Error("User does not exist");
    }
    user.username = req.body.username;
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.mobileNumber = req.body.mobileNumber;
    user.password = await argon2.hash(req.body.password);
    user.save();
    res.send({
      success: true,
      message: "User has been updated"
    });
  } catch (error) {
    res.send(errorHandler(error));
  }
}

export const deleteUser = async(req: Request, res: Response) => {
  await User.delete({id: +req.params.id});
  res.send({
    success: true,
    message: "User has been deleted"
  });
}

export const myself = async(req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decodedToken: any = verify(token!, "secret");
    const userId = decodedToken.userId;
    const user = await User.findByIds(userId);
    res.send({
      success: true,
      data: user
    })
  } catch (error) {
    res.send(errorHandler(error));
  }
}