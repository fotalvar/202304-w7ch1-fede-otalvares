import { type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import RobotError from "../../routers/RobotError.js";
import { User } from "../../database/user/User.js";
import bcrypt from "bcryptjs";
import type UserCredencialAlias from "../../server/types";

export const loginUser = async (
  req: UserCredencialAlias,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      const robotError = new RobotError(401, "Wrong credentials");

      throw robotError;
    }

    const tokenPayload: JwtPayload = {
      sub: user._id.toString(),
      name: user.username,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
