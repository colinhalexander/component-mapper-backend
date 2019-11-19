const express = require('express');

const bodyParser = require('body-parser');
const passport = require('./config/passport')

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const componentsRouter = require('./routes/components');

const app = express();
const PORT = process.env.PORT || '3000'

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(passport.initialize())

app.use(`/users`, usersRouter)
app.use('/projects', projectsRouter)
app.use('/components', componentsRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})