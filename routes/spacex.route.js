const express = require('express')
const router = express.Router()

const spacex_controller = require('../controllers/spacex.controller')

router.get('/all', spacex_controller.all)
router.get('/find/:name', spacex_controller.find_one)
// router.get('/test', spacex_controller.test)
// router.get('/find/:name', spacex_controller.find_one)
// Needs one more get
// router.get('/all', spacex_controller.all)
router.post('/spacex', spacex_controller.spacex_create)
router.put('/:id/update', spacex_controller.spacex_update)
router.delete('/:id/delete', spacex_controller.spacex_delete)
// router.put('/:id/update', spacex_controller.spacex_update)
// router.delete('/:id/delete', spacex_controller.spacex.delete )

module.exports = router