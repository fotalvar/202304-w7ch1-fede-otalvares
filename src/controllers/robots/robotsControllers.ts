import { type NextFunction, type Request, type Response } from "express";
import Robot from "../../database/models/Robots.js";
import RobotError from "../../routers/RobotError.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find().exec();

    res.status(200).json({ robots });
  } catch (error: unknown) {
    next(error);
  }
};

export const getRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idRobot } = req.params;

    const robot = await Robot.findById(idRobot).exec();

    if (!robot) {
      const error = new RobotError(404, "Robot not found");
      throw error;
    }

    res.status(200).json(robot);
  } catch (error: unknown) {
    next(error);
  }
};
