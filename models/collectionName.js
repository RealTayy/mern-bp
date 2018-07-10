/*****************|
|*  DEPENDECIES  *|
|*****************/
//  MongoDB object modeling tool
const mongoose = require("mongoose");

/******************|
|* INITIALIZATION *| 
|******************/
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

/**********|
|* SCHEMA *| 
|**********/
// Create Schema for collectionNameSchema
const collectionNameSchema = new Schema({
  exField1: { type: String, required: true },
  exField2: { type: String, required: true },
});

/***********|
|* EXPORTS *| 
|***********/
module.exports = mongoose.model("CollectionName", collectionNameSchema);
