import express, { Request, Response } from "express";
import { hashPassword } from "../helper/auth";
import { getLoginPage, getSignupPage } from "../controllers/authController";
import users from "../models/users.json";

const router = express.Router();

interface userType {
  username: string;
  email: string;
  password: string;
}

router.get("/login", getLoginPage);
router.get("/signup", getSignupPage);
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.redirect("/");
});

router.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hashPassword(password, 12);
  // const test = JSON.parse(users);
});

export default router;
