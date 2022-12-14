import express, { Request, Response } from "express";
const router = express();

router.get("/", (req: Request, res: Response) => {
  console.log("rootに戻る");

  if (!req.session?.username) {
    res.render("login");
  } else {
    res.render("home", { username: req.session?.username });
  }
});

export default router;
