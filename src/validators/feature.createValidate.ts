import { body } from 'express-validator'

import { isValidFeature, isValidEmail } from './feature.base'

export const validationRules = () => {
  return [
    body('featureName').isString().custom(isValidFeature),
    body('email').isEmail().custom(isValidEmail),
    body('enabled').isBoolean()
  ]
}