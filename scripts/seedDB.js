const mongoose = require("mongoose");
const db = require("../models");
const Promise = require('bluebird');
mongoose.Promise = Promise;

// This file empties CollectionName and inserts the seeds from exSeed below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/boilerPlateDB",
  {
    useMongoClient: true
  }
);

// 
const exSeed = [
  {
    exField1: "Some value for exField1",
    exField2: "Another value for exField2",
  },  
];

db.CollectionName
  .remove({})
  .then(() => db.CollectionName.collection.insertMany(exSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    console.log("scripts/seedDB.js complete. Seeds added!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
