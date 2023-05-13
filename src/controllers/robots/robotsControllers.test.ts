import { type Request, type Response } from "express";
import { getRobot, getRobots } from "./robotsControllers";
import Robot from "../../database/models/Robots";
import robotsMock from "../../data/robots";

type robotResponse = Pick<Response, "status" | "json">;
type robotRequest = Pick<Request, "params">;

describe("Given a getRobots function controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response status method with the status 200", async () => {
      const req = {};
      const res: robotResponse = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const next = jest.fn();

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(robotsMock),
      });

      const expectedStatus = 200;

      await getRobots(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
describe("Given a getRobot function controller", () => {
  describe("When it receives a response and the robot is on the database", () => {
    test("Then it should call the response status methos with the code 200", async () => {
      const req: robotRequest = {
        params: {
          id: robotsMock[3]._id.toString(),
        },
      };
      const res: robotResponse = {
        status: jest.fn(),
        json: jest.fn(),
      };

      Robot.findById = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(robotsMock),
      });
      const next = jest.fn();

      const expectedStatus = 200;

      await getRobot(req as Request<{ id: string }>, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
