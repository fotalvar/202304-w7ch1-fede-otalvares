import express from "express";
import morgan from "morgan";
import robotsRouter from "../routers/robots/robotsRouters.js";
import {
  genericError,
  notFoundError,
} from "../middlewares/errorMiddlewares.js";
import { auth } from "../middlewares/authMiddleware.js";
import userRouter from "../routers/users/usersRouter.js";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use("/login", userRouter);
app.use("/robots", auth, robotsRouter);

app.use(notFoundError);
app.use(genericError);

export default app;
