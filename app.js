import express from "express";
import routes from "./routes";

const app = express();

app.set("views", __dirname + "/view");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get(routes.home, (req, res) => {
  try {
    res.render("home.html");
  } catch (error) {
    console.log(error);
  }
});

export default app;
