const express = require('express')
const app = express()
const port = 3001
let i = 0

app.get('/',(req, res) => {
    i ++
    res.send(`Hello World. You hit this ${i} times`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})