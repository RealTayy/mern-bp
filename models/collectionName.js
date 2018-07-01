const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionNameSchema = new Schema({
  exField1: { type: String, required: true },
  exField2: { type: String, required: true },  
});

const CollectionName = mongoose.model("CollectionName", collectionNameSchema);

module.exports = CollectionName;
