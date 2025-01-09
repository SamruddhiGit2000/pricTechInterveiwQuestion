const express = require('express')
const pool = require('../db')
const db = require('../db')

// router will be used to add routes in the app server
const router = express.Router()

router.get('/', (request, response) => {
  const statement = `select * from EMP`
  db.execute(statement, (error, data) => {
    response.send(data)
  })
})

router.post('/person', (request, response) => {
  const { fname, lname,cname } = request.body
  const statement = `insert into EMP (FirstName, LastName,ComponyName) values ('${fname}','${lname}','${cname}')`
  db.execute(statement, (error, data) => {
    response.send(data)
  })
})

router.put('/person/:param', (request, response) => {
  const { param } = request.params
  const { fname, lname, cname } = request.body

  const statement = `update EMP set FirstName = '${fname}', LastName = '${lname}', ComponyName='${cname}' where FirstName like '${param}'`
  db.execute(statement, (error, data) => {
    console.log(`updated PersonTable`)
    response.send('updated PersonTable')
  })
})

router.delete('/person/:param', (request, response) => {
  const { param} = request.params;

  const statement = `delete from EMP where FirstName like "${param}"`
  db.execute(statement, (error, data) => {
    response.send('deleted');
  })
})

// export the router having all the routes related to the category
module.exports = router
