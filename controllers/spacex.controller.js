const Spacex = require('../models/spacex.model')

// Simple version with no validation or sanitation

// exports.test = (req, res) => {
//     res.send('Greetings from SpaceX controller!')
// }
exports.all = (req, res) => {
    Spacex.find({})
    .then( (allSpacex) => res.json(allSpacex))
}

// NEW 
exports.find_one = (req, res) => {
    Spacex.findOne({ mission_name: req.params.mission_name})
    .then( (foundSpacex) => res.json(foundSpacex))
}

exports.spacex_create = (req, res, next) => {
    let spacex = new Spacex({
        mission_name: req.body.mission_name,
        launch_year: req.body.launch_year,
        launch_success: req.body.launch_success,
        details: req.body.details,
    })

    spacex.save(function(err) {
        if (err) {
            return next(err)
        }
        // res.send('Spacex Launches created!')
        res.json(spacex)
    })
}

// NEW
exports.spacex_update = (req, res, next) => {
    Spacex.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        (err, spacex) => {
            if (err) return next(err)
            res.send(`Spacex ${spacex.mission_name} updated.`)
        },
    )
}

// NEW
exports.spacex_delete = (req, res, next) => {
    Spacex.findByIdAndRemove(req.params.id, (err, spacex) => {
        if (err) return next(err)
        res.send(`${spacex.mission_name} deleted successfully`)
    })
}
