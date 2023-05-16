import bcrypt from "bcryptjs";
import { type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import RobotError from "../../routers/RobotError.js";
import type UserCredencialAlias from "../../server/types";
import User from "../../database/user/User.js";

export const loginUser = async (
  req: UserCredencialAlias,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      const authError = new RobotError(401, "Wrong credentials");
      throw authError;
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
