import express from 'express'
import { PrismaClient } from '@prisma/client'

import { IUserFeatureCreateDTO, IUserFeatureSelectDTO } from '../prisma/dto/IUserFeature'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.use(express.json())

app.get('/feature', (req, res) => {
  const {
    email,
    featureName,
  } = req.query as unknown as IUserFeatureSelectDTO

  prisma.userFeature.findFirst({
    where: {
      user: {
        email: email,
      },
      feature: {
        name: featureName,
      }
    }
  }).then((dbResponse) => {
    res.status(200)
      .send({
        canAccess: dbResponse ? true : false
      })
  }).catch(() => {
    res.sendStatus(502)
  })
})

app.post('/feature', (req, res) => {
  const {
    featureName,
    email,
    enabled = false
  } : IUserFeatureCreateDTO = req.body

  prisma.userFeature.create({
    data: {
      feature: {
        connect: {
          name: featureName,
        }
      },
      user: {
        connect: {
          email: email,
        }
      },
      enabled,
    }
  }).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(304)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})