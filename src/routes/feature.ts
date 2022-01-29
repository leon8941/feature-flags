import express from 'express'

import { IUserFeatureCreateDTO, IUserFeatureSelectDTO } from '../dto/IUserFeature'
import { getUserFeature, createUserFeature } from '../services/feature'

const router = express.Router()

router.get('/', (req, res) => {
  const {
    email,
    featureName,
  } = req.query as unknown as IUserFeatureSelectDTO

  getUserFeature({ email, featureName }).then((dbResponse) => {
    res.status(200)
      .send({
        canAccess: dbResponse ? true : false
      })
  }).catch(() => {
    res.sendStatus(502)
  })
})

router.post('/', (req, res) => {
  const {
    featureName,
    email,
    enabled = false
  } : IUserFeatureCreateDTO = req.body

  createUserFeature({
    featureName,
    email,
    enabled,
  }).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(304)
  })
})

export default router