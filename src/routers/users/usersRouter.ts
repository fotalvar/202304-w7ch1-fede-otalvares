import { Router } from "express";
import { loginUser } from "../../controllers/user/userControllers.js";

const userRouter = Router();

userRouter.post("/", loginUser);

export default userRouter;
