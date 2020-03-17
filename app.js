// ---------- import ----------
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

// ---------- const ----------
// execute express
const app = express();
const handleHome = (req, res) => {
  console.log("I am Home");
  res.send("Hello from Home");
};
const handleProfile = (req, res) => res.send("You are on my profile");

// create Middleware
const betweenHome = (req, res, next) => {
  console.log("I am between");
  next();
};

// ---------- app.OOO ----------
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for security
app.use(morgan("dev"));

// answer to webpage request
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
