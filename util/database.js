const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect(
    "mongodb+srv://ragabyahia:2YTC82PQG2aekPXq@cluster0.iczvoro.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callBack();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
