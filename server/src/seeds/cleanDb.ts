import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists = models[modelName]?.db?.db ? await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray() : [];

    if (modelExists !== undefined && modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
