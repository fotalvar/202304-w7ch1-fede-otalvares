import express from "express";
import morgan from "morgan";
import robotsRouter from "../routers/robots/robotsRouters.js";
import {
  genericError,
  notFoundError,
} from "../middlewares/errorMiddlewares.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(genericError);

export default app;
