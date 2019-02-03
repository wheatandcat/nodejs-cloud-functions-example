const { Datastore } = require("@google-cloud/datastore");
const config = require("../config");

export const getDataStore = () => {
  const datastore = new Datastore({
    projectId: config.projectId
  });

  return datastore;
};
