// Add mongo here?
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Database Name
const url = "mongodb://localhost:27017/plants";

MongoClient.connect(url, function (err, client) {
  if (err) throw err

  var db = client.db('plants')

  db.collection('leaves').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

// Database Name
// const dbName = 'plants';

// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });