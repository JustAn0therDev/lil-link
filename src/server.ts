import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)

app.listen(9000)