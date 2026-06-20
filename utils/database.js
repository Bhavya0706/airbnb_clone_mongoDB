const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const mongo_url = process.env.MONGO_URI;

let _db;

const mongoconnect = (callback) => {
  MongoClient.connect(mongo_url)
    .then((client) => {
      _db = client.db('airbnbb');
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getdb = () => {
  if (!_db) {
    throw new Error('Database not connected yet');
  }
  return _db;
};

exports.getdb = getdb;
exports.mongoconnect = mongoconnect;
