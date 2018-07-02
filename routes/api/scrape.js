/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

/**********************************|
|*  SETS UP API ROUTES FOR SCRAPE *|
|**********************************/
// Imports in controller to be used for scraping
const scrapeController = require("../../controllers/scrapeController.js");

// Matches with "/api/scrape" this is defined in "../index.js"
router.route("/")
  .get(scrapeController.scrapeURL)

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains scrape routes
module.exports = router;