
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const peopleModel = require("./people_model")

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// comment it later



// Database


// route 

app.get('/', async (request, response) => {
    data = await peopleModel.get()
    response.json({ info: 'Node.js, Express, and Postgres API', "data" : data })
  })
app.post('/', async (request, response) => {
    // edit below stuff to create data
    data = await peopleModel.get_data()
    response.json({ info: 'Node.js, Express, and Postgres API', "data" : data })
})
app.get('/people/:id', async (request, response) => {
    // edit below stuff to create data
    data = await peopleModel.get_one(request)
    response.json({ info: 'Node.js, Express, and Postgres API', "data" : data })
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  