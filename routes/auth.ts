import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
// import users from "../models/users.json";
const router = express.Router();

const hashPassword = async (passwordText: string, saltRound: number) => {
  const salt = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(passwordText, salt);
  return hashedPassword;
};
router.get("/login", (req: Request, res: Response) => {
  res.render("login");
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hashPassword(password, 12);
  console.log(hashedPassword);

  res.redirect("/");
});

router.get("/signup", (req: Request, res: Response) => {
  res.render("signup");
});

export default router;
