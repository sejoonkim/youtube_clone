// export const join = (req, res) => res.send("Join");
// export const login = (req, res) => res.send("Login");
// export const logout = (req, res) => res.send("Logout");
// export const users = (req, res) => res.send("Users");
// export const userDetail = (req, res) => res.send("User Detail");
// export const editProfile = (req, res) => res.send("Edit Profile");
// export const changePassword = (req, res) => res.send("Change Password");

// export const users = (req, res) => res.render("users");

export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log Out" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
