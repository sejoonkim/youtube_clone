// ---------- import ----------
// // ----- old syntax -----
// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// ---------- const ----------
// execute express
const app = express();
const PORT = 4000;

// ---------- functions ----------
// // ----- old syntax -----
// function handleListening() {
//   console.log(`Listening on http://localhost:${PORT}`);
// }

// function handleHome(req, res) {
//   console.log(req);
//   res.send("Hello from Home");
// }

// use Arrow Functions
const handleListening = () =>
  console.log(`Listening on http://localhost:${PORT}`);
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
// use betweenHome middleware on every connection on my web
// ORDER MATTERS!
// app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for security
app.use(morgan("dev"));

// *middleware killing connection before route
// const middleware = (req, res, next) => {
//   res.send("not happening");
// };
// app.get("/", middleware, handleHome);

// answer to webpage request
app.get("/", handleHome);

// // Initial middleware code
// app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
