const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req, res, next) => {
    res.send('Hello World')
})

app.get('/getapi', (req, res, next) => {
    res.send('this is get api ')
})

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})