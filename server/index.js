const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.get('/', (req, res) => {
    res.send('Szia Cica!')
  })
app.use( express.static('static') )
app.use( bodyParser.json() )

app.use( (req, res, next) => {
    res.header(
        'Access-Control-Allow-Origin',
        '*'
    )
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
} )
app.listen(
    3000,
    () => console.log(
          'Back-end szerver elérhető a http://localhost:3000 webcímen'
    )
)
