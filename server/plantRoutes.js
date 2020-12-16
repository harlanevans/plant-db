const express = require("express");

const plantController = require("./PlantController");

const router = express.Router();

router.get("/", plantController.getPlants, (req, res) => {
    console.log("GET PLANTS REQUEST")
  return res.status(200).json(res.locals.plants);
});

module.exports = router;
