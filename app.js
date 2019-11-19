require('dotenv').config()
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors')
const passport = require('./config/passport')

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const componentsRouter = require('./routes/components');

const app = express();
const PORT = process.env.PORT || '3000'

app.use(bodyParser.json())
app.use(cors())

app.use(passport.initialize())

app.use(`/users`, usersRouter)
app.use('/projects', projectsRouter)
app.use('/components', componentsRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})