import express from "express";
import userController from "./Controllers/userControllers.js";
import genderControllers from "./Controllers/genderControllers.js";
import directorControllers from "./Controllers/directorControllers.js";
import atorControllers from "./Controllers/actorControllers.js";
import loginControllers from "./Controllers/loginControllers.js";
import { verifyJWT } from "../middlewares/JWT.js";

const routes = express();

routes.use("/user", verifyJWT ,userController);

routes.use("/gender", genderControllers);

routes.use("/director", directorControllers);

routes.use("/actor", atorControllers);

routes.use("/login", loginControllers);

export default routes;



