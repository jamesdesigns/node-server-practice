const Pokemon = require('../models/pokemon.model')

// Simple version with no validation or sanitation
exports.test = (req, res) => {
    res.send('Greetings from the test controller!')
}

exports.pokemon_create = (req, res, next) => {
    let pokemon = new Pokemon({
        name: req.body.name,
        price: req.body.price,
    })

    pokemon.save(function(err) {
        if (err) {
            return next(err)
        }
        res.send('Pokemon created successfully')
    })
}

