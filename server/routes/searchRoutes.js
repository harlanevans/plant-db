const express = require("express");
const searchController = require("../controllers/SearchController");

const router = express.Router();

router.post("/search", searchController.searchFunction, (req, res) => {
  console.log("SEARCH BAR QUERY COMPLETE", res.locals.query);
  return res.status(200).json(res.locals.query);
});

// router.get('/all_plants', searchController.allPlants, (req, res) => {

// })
module.exports = router;