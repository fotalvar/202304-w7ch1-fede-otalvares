import { type Request } from "express";

type UserCredencialAlias = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { username: string; password: string }
>;

export default UserCredencialAlias;
