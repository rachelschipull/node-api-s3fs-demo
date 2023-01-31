const express = require('express')
const bodyParser = require('body-parser')
const fs = require('@cyclic.sh/s3fs')('cyclic-gold-motionless-betta-ca-central-1')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port)
})