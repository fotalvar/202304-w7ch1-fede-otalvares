import { type Request, type Response } from "express";
import Robot from "../../database/models/Robots.js";

export const getRobots = async (req: Request, res: Response) => {
  try {
    const robots = await Robot.find().exec();

    res.status(200).json({ robots });
  } catch {
    res.status(404).json({ message: "404 Can't get robots" });
  }
};
