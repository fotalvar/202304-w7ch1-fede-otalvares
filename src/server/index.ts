import express from "express";
import cors from "cors";
import morgan from "morgan";
import robotsRouter from "../routers/robots/robotsRouters.js";
import {
  genericError,
  notFoundError,
} from "../middlewares/errorMiddlewares.js";
import { auth } from "../middlewares/authMiddleware.js";
import userRouter from "../routers/users/usersRouter.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://202304-w7ch1-fede-otalvares-front.netlify.app/",
];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use("/login", userRouter);
app.use("/robots", auth, robotsRouter);

app.use(notFoundError);
app.use(genericError);

export default app;
