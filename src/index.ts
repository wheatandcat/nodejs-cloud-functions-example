import { Request, Response } from "express";

export const helloGET = (req: Request, res: Response) => {
  res.send("Hello World!");
};
