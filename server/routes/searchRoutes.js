const express = require("express");
const searchController = require("../controllers/SearchController");

const router = express.Router();

router.get("/search?q=query", searchController.searchFunction, (req, res) => {
  console.log("SEARCH BAR QUERY COMPLETE", req, res);
  return res.status(200).json("the search");
});

// router.get('/all_plants', searchController.allPlants, (req, res) => {

// })
