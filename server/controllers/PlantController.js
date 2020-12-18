const { update } = require('../models/PlantModel');
const Plant = require('../models/PlantModel')


const plantController = {};

plantController.getPlants = (req, res, next) => {
    Plant.find({}, (err, allPlants) => {
        if (err) return next("Error in plantsController.getPlants: " + JSON.stringify(err))
        // console.log('plants', allPlants)
        res.locals.plants = allPlants;
        return next();
    })
}

plantController.createPlant = (req, res, next) => {
    // let newPlant = new Plant({ name: req.body })
    // newPlant.save(function (err) {
    //     if (err) return  console.log(err, 'Oopsie Woopsie')
    //     // saved!
    // })
    //OR
    console.log('createPlant request', req.body.plant)
    const { name, family, genus, year, image } = req.body.plant;
    Plant.create({ name, family, genus, year, image }, function (err, newPlant) {
        if (err) return next("Error in plantsController.createPlants: " + JSON.stringify(err))
        // saved
        res.locals.newPlant = newPlant
        return next()
    })
    
    
}

plantController.deletePlant = (req, res, next) => {
    console.log("IN DELETE CONTROLLER", req.params)
    // delete one plants where the _id matches what id was recieved from params
    Plant.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.status(500).send(err)
            return next("Error in plantsController.deletePlants: " + JSON.stringify(err))
        }
        // deleted Plant
        return next()
    })
    
}

plantController.editPlant = (req, res, next) => {
    console.log('EDIT CONTROLLER MIDDLEWARE', req.params, req.body.plant)
    const { name, genus, family, year, image } = req.body.plant;
    Plant.updateOne({ _id: req.params.id }, { name, genus, family, year }, function (err) {
        if (err) return next("Error in plantsController.editPlant: " + JSON.stringify(err))
        // updated in DB
        res.locals.updatedPlant = {_id: req.params.id, name, genus, family, year, image};
        return next()
    })
}

module.exports = plantController;