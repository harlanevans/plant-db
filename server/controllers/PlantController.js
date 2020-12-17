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
    console.log('createPlant request', req.body.newPlant)

    Plant.create({ name: req.body.newPlant }, function (err, newPlant) {
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
        if (err) return next("Error in plantsController.deletePlants: " + JSON.stringify(err))
        // deleted Plant
        return next()
    })
    
}

plantController.editPlant = (req, res, next) => {
    console.log('EDIT CONTROLLER MIDDLEWARE', req.params, req.body.plant)
    Plant.updateOne({ _id: req.params.id }, { name: req.body.plant.name }, function (err) {
        if (err) return next("Error in plantsController.editPlant: " + JSON.stringify(err))
        // updated in DB
        res.locals.updatedPlant = {_id: req.params.id, name: req.body.plant.name};
        return next()
    })
}

module.exports = plantController;