const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')
const dbConnection = require('./db/db')
dbConnection()
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use('/users',userRoutes)



module.exports = app;