import express from 'express'

import features from './routes/feature'

const app = express()

const port = 3000

app.use(express.json())

app.use((handlers) => {
  const {
    next
  } = handlers
  console.log('test next', new Date())
  next()
})

app.use('/feature', features)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})