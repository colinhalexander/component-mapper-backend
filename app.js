const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || '3000'

app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.get("/", (req, res, next) => {
  res.send("Ya made it")
})