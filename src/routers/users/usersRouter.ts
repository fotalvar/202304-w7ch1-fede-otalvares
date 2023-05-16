import { Router } from "express";
import { loginUser } from "../../controllers/user/userControllers.js";

const userRouter = Router();

userRouter.post("/login", loginUser);

export default userRouter;
