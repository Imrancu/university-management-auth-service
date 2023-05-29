import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

// cors middleware
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Our Backend is working properly')
})

export default app
