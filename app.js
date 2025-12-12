const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

// 🔥 Render / Railway / Local — All supported
const PORT = process.env.PORT || 3000;

// EJS + ejsMate engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

// Correct Views Folder
app.set("views", path.join(__dirname, "views"));

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("portfolio");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/spotify", (req, res) => {
  res.render("spotify");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});