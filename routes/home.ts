import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world from express and typescript");
});

export default router;
