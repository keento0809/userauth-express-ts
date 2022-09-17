// const express = require("express");
// const dotenv = require("dotenv");

import express, { Express } from "express";
import dotenv from "dotenv";
import home from "./routes/home";
import user from "./routes/user";
import auth from "./routes/auth";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);
app.use("/", home);
app.use("/user", user);
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
