/**********************|
|*  Imports In model  *|
|**********************/
const db = require("../models");

/***************************|
|*  Methods for controller *|
|***************************/
const CollectionNameController = {
  findAll: function (req, res) {
    db.CollectionName
      .find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.CollectionName
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    db.CollectionName
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.CollectionName
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.CollectionName
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

/***********|
|* EXPORTS *|
|***********/
module.exports = CollectionNameController;
