const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Set up mongoose to Atlas connection
const dev_db_url = 'mongodb+srv://jhooperdev:servingtheweb2019!$@product-cluster-iyok6.gcp.mongodb.net/product'
const mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB, {useNewUrlParser: true})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const product = require('./routes/product.route') // imports routes for the products
const pokemon = require('./routes/pokemon.route') // imports routes for the pokemon
const spacex = require('./routes/spacex.route') // imports routes for the spacex


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/products', product)
app.use('/pokemon', pokemon)
app.use('/spacex', spacex)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})


const port = 5775

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})

