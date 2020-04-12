// ---------- import ----------
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
//import { userRouter } from "./routers/userRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport";
// ---------- const ----------
// execute express
const app = express();

const CookieStore = MongoStore(session);

// does not suit with MVC pattern
// const handleHome = (req, res) => {
//   console.log("I am Home");
//   res.send("Hello from Home");
// };

// does not suit with MVC pattern
// const handleProfile = (req, res) => res.send("You are on my profile");

// // create Middleware
// const betweenHome = (req, res, next) => {
//   console.log("I am between");
//   next();
// };

// ---------- app.OOO ----------
app.use(helmet()); // for security
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser()); // for User Authentication
app.use(bodyParser.json()); // checks what content user is sending
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({
      //give connection to mongo, keep the cookie
      mongooseConnection: mongoose.connection,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

// does not suit with MVC pattern
// // answer to webpage request
// app.get("/", handleHome);

// does not suit with MVC pattern
// app.get("/profile", handleProfile);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
