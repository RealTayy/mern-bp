/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

/******************************************|
|*  SETS UP API ROUTES FOR COLLECTIONNAME *|
|******************************************/
// Imports in controller for collectionName
const collectionNameController = require("../../controllers/collectionNameController.js");

// Matches with "/api/collectionName" this is defined in "../index.js"
router.route("/")  
  .get(collectionNameController.findAll)
  .post(collectionNameController.create);

// Matches with "/api/collectionName/:id" this is defined in "../index.js"
router.route("/:id")
  .get(collectionNameController.findById)
  .put(collectionNameController.update)
  .delete(collectionNameController.remove);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains collectionName routes
module.exports = router;
