const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const SpacexSchema = new Schema({
    flight_id: { type: String, required: true},
    flight_number: { type: Number, required: true},
    launch_year: { type: Number, required: false},
    launch_success: { type: Boolean, required: false},

    // flight_number: { type: Number, required: true},
    // mission_name: { type: String, required: true},
    // launch_year: { type: String, required: false},
    // launch_success: { type: Boolean, required: false},
    // details: { type: String, required: false },
})

module.exports = mongoose.model('Spacex', SpacexSchema)
// exporting the model named 'Spacex' for use by our other files