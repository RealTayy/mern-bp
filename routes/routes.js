/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require("path");
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

/***********************|
|*  SET UP API ROUTES  *|
|***********************/
// Imports router from ./api/index.js
// const apiRoutes = require("./api");

// Sets API Routes and path to be www.url.com/api/etc.
// router.use("/api", apiRoutes);

/************************|
|*  SET UP VIEW ROUTES  *|
|************************/
/* For any request/routes that don't match the ones from apiRoutes
Send's back React's index.html file */
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API and VIEW routes
module.exports = router;
