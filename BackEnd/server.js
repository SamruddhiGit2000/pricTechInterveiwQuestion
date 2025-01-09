const express = require('express')
const bodyParser = require('body-parser')

// routers
const routeEmpTable = require('./routes/table.js')


const app = express()

app.use(bodyParser.json())

// middleware
app.use(routeEmpTable)

app.get('/', (request, response) => {
  response.send('welcome to server application')
})

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})