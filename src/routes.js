import express from "express";
import userController from "./Controllers/userControllers.js";

const routes = express();

routes.use("/user", userController)

export default routes;



