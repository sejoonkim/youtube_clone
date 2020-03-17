const express = require("express");
// execute express
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello from Home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

// answer to webpage request
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
