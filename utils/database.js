const mongo = require('mongodb');

const  Mongoclient = mongo.MongoClient;

const mongo_url = "mongodb+srv://bhavya:bh%40vy%40@bhavya.g1kwbuj.mongodb.net/?appName=bhavya";

let _db;
const mongoconnect = (callback)=>{

    Mongoclient.connect(mongo_url).then(client =>{
       
        callback();
        _db = client.db('airbnbb');
    }).catch(err =>{
        console.log(err);
    })
}
const getdb =()=>{
    if(!_db){
      throw new Error("database not connected yet")
    }else{
        return _db;
    }
}
exports.getdb = getdb;
exports.mongoconnect = mongoconnect;