import express from 'express'
import cors from 'cors'
import { gameRouter } from './routes/index.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(gameRouter)

export default app
