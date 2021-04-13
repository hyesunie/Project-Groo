import express from "express";
import routes from "./routes";

const app = express();

app.use("/assets", express.static("assets"));
app.use("/node_modules", express.static("node_modules"));

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/view");

app.get(routes.home, (req, res) => {
  try {
    res.render("home.html");
  } catch (error) {
    console.log(error);
  }
});

export default app;
