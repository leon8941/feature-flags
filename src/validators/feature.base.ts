import { validationResult, CustomValidator } from 'express-validator'

import { getFeature } from '../services/feature'
import { getUser } from '../services/user'

export const isValidEmail: CustomValidator = (value: string) => {
  return getUser(value).then(userData => {
    if (!userData) {
      return Promise.reject('Email not found!')
    }
  }).catch(error => {
    return Promise.reject(`${error}`)
  })
}

export const isValidFeature: CustomValidator = (value: string) => {
  return getFeature(value).then(featureData => {
    if (!featureData) {
      return Promise.reject('Feature name not found!')
    }
  }).catch(error => {
    return Promise.reject(`${error}`)
  })
}

export const validate = (req, res, next) => {
  const errors = validationResult(req)
  
  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}