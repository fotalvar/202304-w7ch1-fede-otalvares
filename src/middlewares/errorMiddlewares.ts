import "../loadEnvironments.js";
import createDebug from "debug";
import RobotError from "../routers/RobotError.js";
import { type NextFunction, type Request, type Response } from "express";

const debugError = createDebug("robots-api:server:middleware:errorMiddlewares");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new RobotError(404, "Error, not found");
  next(error);
};

export const genericError = (
  error: RobotError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debugError(error.message);
  const statusCode = error.statusCode || 500;
  const message = error.statusCode ? error.message : "Internal Server Error";

  res.status(statusCode).json({ message });
};
