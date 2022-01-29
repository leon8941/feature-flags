import { query } from 'express-validator'

import { isValidEmail, isValidFeature } from './feature.base'

export const validationRules = () => {
  return [
    query('email').isEmail().custom(isValidEmail),
    query('featureName').isString().custom(isValidFeature)
  ]
}