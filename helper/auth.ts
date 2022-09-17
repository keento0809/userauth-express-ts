import bcrypt from "bcrypt";
import { userObj } from "../controllers/authController";

export const hashPassword = async (passwordText: string, saltRound: number) => {
  const salt = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(passwordText, salt);
  return hashedPassword;
};

export const checkUserMatch = async (password: string, user: userObj) => {
  const isUserMatch = await bcrypt.compare(password, user.password);
  return isUserMatch;
};
