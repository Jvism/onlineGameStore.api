import express from 'express'
import userRoutes from './routes/routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)

export default {
  app
}
