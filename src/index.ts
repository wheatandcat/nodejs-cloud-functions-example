import { Request, Response } from "express";

const { getDataStore } = require("./lib/datastore");
const moment = require("moment");
const uuidv1 = require("uuid/v1");

export const saveStatus = async (req: Request, res: Response) => {
  if (!req.query.field || !req.query.status) {
    res.status(500);
    res.json({ error: "not match query" });
    return;
  }

  const data = {
    field: req.query.field,
    status: req.query.status,
    created: moment()
  };

  const ds = getDataStore();

  const entity = {
    key: ds.key("results", uuidv1()),
    data
  };

  await ds.save(entity);

  res.json();
};
