import express from 'express'
import { PORT } from './config/environment.js'
import Router from './config/router.js'
import { connectDb } from './db/helpers.js'

//const express = require('express')
const app = express()
/*const port = 3001
const os = require('os')
const hostname = os.hostname()
*/
app.use(express.json())
app.use('/api', Router)

async function startServer() {
  try {
    await connectDb()
    console.log('connected to DB')
    app.listen(3001, function () {
      console.log('App is listening on port', PORT)
    })
  } catch (err) {
    console.log('something went wrong starting the app', err)
  }
}

/*app.get('/', (req, res) => {
  res
    .status(200)
    .send(`Carbon footprints \n this application is running on ${hostname}`)
})

app.listen(port, () => {
  console.log(`capstone app listening at http://localhost:${port}`)
})
*/

startServer()
