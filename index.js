const express = require('express')
const app = express()
const port = 3000

app.get('/adu', (req, res) => {
  res.send('Hello Wordddld!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
