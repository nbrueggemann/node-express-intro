const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser())

app.get('/withUrlParams', (req, res) => {
    res.send(`You sent ${req.query.firstName} ${req.query.lastName}`);
})

app.post('/handlePostRequestBody', (req, res) => {
    res.send(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))