/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import 'dotenv'

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  console.log('Health check request received')
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
