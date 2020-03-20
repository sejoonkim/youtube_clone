import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube_clone";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
