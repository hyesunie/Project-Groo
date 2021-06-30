import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  try {
    res.render("index.html");
  } catch (error) {
    console.log(error);
  }
});

globalRouter.get(routes.detail, (req, res) => {
  try {
    res.render("index.html");
  } catch (error) {
    console.log(error);
  }
});

export default globalRouter;
