const express = require("express");
const app = express();
const data = require("./data.json");
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index", { data });
	// res.render("new", { data });
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
