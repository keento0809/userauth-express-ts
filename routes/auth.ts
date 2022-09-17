import express, { Request, Response } from "express";
import { hashPassword } from "../helper/auth";
import {
  getLoginPage,
  getSignupPage,
  login,
  signup,
  logout,
} from "../controllers/authController";

const router = express.Router();

router.get("/login", getLoginPage);
router.get("/signup", getSignupPage);
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;
