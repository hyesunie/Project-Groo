import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use("/static", express.static("static"));
app.use("/assets", express.static("assets"));
app.use("/node_modules", express.static("node_modules"));
app.use("/view", express.static("view"));

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/view");

app.use(routes.home, globalRouter);

export default app;
