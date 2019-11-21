require('dotenv').config()
const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('./config/passport')

const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const wakeUpRouter = require('./routes/wakeup')
const projectsRouter = require('./routes/projects')
const componentsRouter = require('./routes/components')

const app = express()
const PORT = process.env.PORT || '3000'

app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())

app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/wakeup', wakeUpRouter)
app.use('/projects', projectsRouter)
app.use('/components', componentsRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})