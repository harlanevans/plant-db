const express = require("express");

const plantController = require("../controllers/PlantController");

const router = express.Router();

// GET
router.get("/", plantController.getPlants, (req, res) => {
    // console.log("GET PLANTS REQUEST", res)
  return res.status(200).json(res.locals.plants);
});

// CREATE
router.post("/newPlant", plantController.createPlant, (req, res) => {
    console.log("POST PLANTS REQUEST", res.locals.newPlant)
    return res.status(200).json(res.locals.newPlant)
});

// DELETE
router.delete('/:id/delete',
    plantController.deletePlant,
    // re get plants after deletion for updated array of plants
    plantController.getPlants,
    (req, res) => {
    console.log("DELETE PLANT SUCCESSFUL")
    return res.status(200).json(res.locals.plants)
});

// EDIT
router.put('/:id/editPlant', plantController.editPlant, (req, res) => {
    console.log('EDIT PLANT SUCCESSFUL', res.locals.updatedPlant)
    return res.status(200).json(res.locals.updatedPlant)
})

module.exports = router;
