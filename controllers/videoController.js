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

// import { videos } from "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}); // find any videos in DB
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  // equals const searchingBy = req.query.term;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  //res.render("upload", { pageTitle: "Upload" });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
