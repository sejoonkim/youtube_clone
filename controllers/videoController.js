// export const home = (req, res) => res.send("Home");
// for pug
// export const home = (req, res) => res.render("home");
// export const search = (req, res) => res.send("Search");
// export const videos = (req, res) => res.send("Videos");
// export const upload = (req, res) => res.send("Upload");
// export const videoDetail = (req, res) => res.send("Video Detail");
// export const editVideo = (req, res) => res.send("Edit Video");
// export const deleteVideo = (req, res) => res.send("Delete Video");

// export const videos = (req, res) => res.render("Videos");

export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
