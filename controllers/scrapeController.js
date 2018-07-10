/***************|
|* DEPENDECIES *| 
|***************/
/* WEB SCRAPERS */
// tool for making HTTP calls
const request = require('request');
// scraper that implements jQuery
const cheerio = require('cheerio');

/**********************|
|*  Imports In model  *|
|**********************/
const db = require("../models");

/***************************|
|*  Methods for controller *|
|***************************/
const scrapeController = {
	scrapeURL: function (req, res) {
		// Do stuff to scrape a webpage in here...
		// By the end of this block of code you should have scraped data and inserted it into the relevant collection
		res.json('This scraper has not been set up yet');
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = scrapeController;