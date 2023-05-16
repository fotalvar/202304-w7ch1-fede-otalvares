import { type Response, type Request } from "express";
import { auth } from "./authMiddleware";

describe("Given an auth Middleware", () => {
  describe("When it receives an authorization header with a valid token and a next function", () => {
    test("Then it should call the received next function", () => {
      const next = jest.fn();
      const token = "token";
      const req: Pick<Request, "header"> = {
        header: jest.fn().mockReturnValue(`Bearer ${token}`),
      };
      const res = {};

      auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
