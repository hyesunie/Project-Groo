import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  try {
    res.render("home.html");
  } catch (error) {
    console.log(error);
  }
});

globalRouter.get(routes.detail, (req, res) => {
  res.render("detail.html");
});

export default globalRouter;
