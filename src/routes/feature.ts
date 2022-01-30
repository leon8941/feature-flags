import express from 'express'

import { IUserFeatureCreateDTO, IUserFeatureSelectDTO } from '../dto/IUserFeature'
import { getUserFeature, createUserFeature } from '../services/feature'

import {
  baseRules,
  getValidationRules,
  createValidationRules,
} from '../validators'

const router = express.Router()

router.get('/', getValidationRules.validationRules(), baseRules.validate, (req, res) => {
  const {
    email,
    featureName,
  } = req.query as unknown as IUserFeatureSelectDTO

  getUserFeature({ email, featureName }).then((dbResponse) => {
    res.status(200)
      .send({
        canAccess: dbResponse ? dbResponse.enabled : false
      })
  }).catch(() => {
    res.sendStatus(502)
  })
})

router.post('/', createValidationRules.validationRules(), baseRules.validate, (req, res) => {
  const {
    email,
    featureName,
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