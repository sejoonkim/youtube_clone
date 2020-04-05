import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

// passport with the help of passport-local-mongoose, finally authenticates the user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());