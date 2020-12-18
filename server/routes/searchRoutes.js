const express = require("express");
const searchController = require("../controllers/SearchController");

const router = express.Router();

router.post("/search", searchController.searchFunction, (req, res) => {
  if (res.locals.query.data.length < 1) {
    console.log("ERROR IN SEARCH ROUTER");
    return res.status(406).json([]);
  } else {
    console.log("SEARCH BAR QUERY COMPLETE");
    return res.status(200).json(res.locals.query);
  }
});

// router.get('/all_plants', searchController.allPlants, (req, res) => {

// })
module.exports = router;
