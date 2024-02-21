import express from 'express'
const app = express()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
