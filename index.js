// // old syntax
// const express = require("express");
import express from "express";

// execute express
const app = express();

const PORT = 4000;

// function handleListening() {
//   console.log(`Listening on http://localhost:${PORT}`);
// }

// function handleHome(req, res) {
//   console.log(req);
//   res.send("Hello from Home");
// }

// Arrow functions
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

// use betweenHome middleware on every connection on my web
// ORDER MATTERS!
app.use(betweenHome);

// answer to webpage request
app.get("/", handleHome);

// // Initial middleware code
// app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
