const express = require('express')
const router = express.Router()

const product_controller = require('../controllers/product.controller')

// router.get('/test', pokemon_controller.test)

// router.post('/create', product_controller.product_create)

router.post('/pokemon', product_controller.pokemon_create)

// router.put('/:id/update', product_controller.product_update)
// router.delete('/:id/delete', product_controller.product.delete )

// router.delete('/:id/delete', pokemon_controller.pokemon_delete)

module.exports = router
