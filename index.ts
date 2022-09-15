// const express = require("express");
// const dotenv = require("dotenv");

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import home from "./routes/home";
import user from "./routes/user";
import auth from "./routes/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/", home);
app.use("/user", user);
app.use("/auth", auth);

app.get("/", (req: Request, res: Response) => {
  res.send(`Express + Typescript Server`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
