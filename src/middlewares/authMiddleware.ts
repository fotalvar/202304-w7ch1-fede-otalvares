import { type NextFunction, type Request, type Response } from "express";
import RobotError from "../routers/RobotError.js";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader?.includes("Bearer")) {
      const error = new RobotError(401, "Missing token");

      throw error;
    }

    const token = authorizationHeader.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET!);

    next();
  } catch (error: unknown) {
    next(error);
  }
};
