const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

// routers
const routeEmpTable = require('./routes/table.js')


const app = express()
const corsOptions = {
  origin: 'http://localhost:3000',  
  methods: 'GET,POST,DELETE,PUT',              
  allowedHeaders: 'Content-Type',   
};

//app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions)); 

// middleware
app.use(routeEmpTable)

app.get('/', (request, response) => {
  response.send('welcome to server application')
})

app.listen(5000, '0.0.0.0', () => {
  console.log('server started on port 5000')
})