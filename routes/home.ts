import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session?.username) {
    res.redirect("/");
  } else {
    res.redirect("/auth/login");
  }
});

export default router;
