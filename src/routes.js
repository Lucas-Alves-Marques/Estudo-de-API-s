import express from "express";
import userController from "./Controllers/userControllers.js";
import genderControllers from "./Controllers/genderControllers.js";
import directorControllers from "./Controllers/directorControllers.js";
import atorControllers from "./Controllers/actorControllers.js";

const routes = express();

routes.use("/user", userController);

routes.use("/gender", genderControllers);

routes.use("/director", directorControllers);

routes.use("/actor", atorControllers);

export default routes;



