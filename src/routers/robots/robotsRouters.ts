import { Router } from "express";
import { getRobots } from "../../controllers/robots/robotsControllers.js";

const robotsRouter = Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
