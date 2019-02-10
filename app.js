const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send('we out here 🙏')
})

app.listen(port, () => {
  console.log(`got you on ${port}`)
})
