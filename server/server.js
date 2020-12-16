const plantRoutes = require("./plantRoutes");
const path = require("path");
const express = require("express");
const mongoose = require('mongoose')
const app = express();
// Add mongo here
// Database Name
const url = "mongodb://localhost:27017/plants";
mongoose.connect(url)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("we are connected!")
})

// Database Name
// const dbName = 'myPlants';

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });

// require routes
// NOT SURE IF I NEED THIS OR NOT
app.use(express.json())

// SAME WITH IS... DO I NEED?
app.use(express.static("client"));

// BUILD FILES FROM WEBPACK
app.use("/build", express.static(path.join(__dirname, "../build")));

// PLANTS ROUTE
app.use("/plants", plantRoutes);

// root
app.get("/", (req, res) => {
    console.log(url)
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });

// GLOBAL CATCH
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Internal Server Error')
})

// server port
app.listen(3000, () => {console.log(`Listening on Port 3000 and sort of 8080?`)});


module.exports = app;