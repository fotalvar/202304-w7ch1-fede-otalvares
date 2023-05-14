import { type Request, type Response, type NextFunction } from "express";
import { notFoundError } from "./errorMiddlewares.js";
import RobotError from "../routers/RobotError.js";

type CustomResponse = Pick<Response, "get">;

describe("Given a notFoundError function", () => {
  describe("When it is been called", () => {
    test("Then it should return a code 404 with the message 'Error, not found'", () => {
      const customRobotError = new RobotError(404, "Error, not found");

      const response: CustomResponse = {
        get: jest.fn(),
      };

      const request = {};
      const next = jest.fn();

      notFoundError(
        request as Request,
        response as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(customRobotError);
    });
  });
});
