import { sign } from "jsonwebtoken";
import { User } from "../entity/User";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, "secret", { expiresIn: "9999m"})
}