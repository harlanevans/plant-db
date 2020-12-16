const Plant = require('./PlantModel')


const plantController = {};

plantController.getPlants = (req, res, next) => {
    Plant.find({}, (err, plants) => {
        if (err) return next("Error in plantsController.getPlants: " + JSON.stringify(err))

        res.locals.plants = plants;
        return next();
    })
}

module.exports = plantController;