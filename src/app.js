const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const authRouter = require('./routes/auth.router')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/users', authRouter)

module.exports = app;