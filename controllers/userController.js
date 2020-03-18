// export const join = (req, res) => res.send("Join");
// export const login = (req, res) => res.send("Login");
// export const logout = (req, res) => res.send("Logout");
// export const users = (req, res) => res.send("Users");
// export const userDetail = (req, res) => res.send("User Detail");
// export const editProfile = (req, res) => res.send("Edit Profile");
// export const changePassword = (req, res) => res.send("Change Password");

// export const users = (req, res) => res.render("users");

export const join = (req, res) => res.render("join", { pageTitle: "Home" });
export const login = (req, res) => res.render("login", { pageTitle: "Home" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Home" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "Home" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Home" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Home" });
