import express from 'express'

import { IUserFeatureCreateDTO, IUserFeatureSelectDTO } from '../dto/IUserFeature'
import { getUserFeature, createUserFeature } from '../services/feature'

import { validate } from '../validators/feature.base'
import { 
  validationRules as featureGetValidationRules
} from '../validators/feature.getValidate'
import {
  validationRules as featureCreateValidationRule
} from '../validators/feature.createValidate'

const router = express.Router()

router.get('/', featureGetValidationRules(), validate, (req, res) => {
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

router.post('/', featureCreateValidationRule(), validate, (req, res) => {
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