import { Request, Response } from "express";
import { hashPassword, checkUserMatch } from "../helper/auth";
import users from "../models/users.json";

export interface userObj {
  username: string;
  email: string;
  password: string;
}

export const getLoginPage = (req: Request, res: Response) => {
  res.render("login");
};

export const getSignupPage = (req: Request, res: Response) => {
  res.render("signup");
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  const loginUser = users.find((user) => user.email === email);
  if (!loginUser) res.status(400).json({ error: "Invalid login" });
  const isUserMatch = checkUserMatch(password, loginUser!);
  if (!isUserMatch) res.status(400).json({ error: "Invalid login" });
  req.session!.username = loginUser!.username;
  res.redirect("/home");
};

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hashPassword(password, 12);
  if (!hashedPassword) throw new Error("Invalid login");
  req.session!.username = username;
  console.log(req.session);
  res.redirect("/home");
};

export const logout = async (req: Request, res: Response) => {
  req.session = null;
  console.log("Logged out");
  res.redirect("/");
};
