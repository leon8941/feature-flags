import express from 'express'

import features from './routes/feature'

const app = express()
const port = 3000

app.use(express.json())
app.use('/feature', features)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})