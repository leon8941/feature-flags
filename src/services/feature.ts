import { PrismaClient } from '@prisma/client'

import { IUserFeatureCreateDTO, IUserFeatureSelectDTO } from '../dto/IUserFeature'

const prisma = new PrismaClient()

export const getUserFeature = (payload: IUserFeatureSelectDTO) => {
  const {
    email,
    featureName,
  } = payload

  return prisma.userFeature.findFirst({
    where: {
      user: {
        email: email,
      },
      feature: {
        name: featureName,
      }
    }
  })
}

export const createUserFeature = (payload: IUserFeatureCreateDTO) => {
  const {
    featureName,
    email,
    enabled,
  } = payload

  return prisma.userFeature.create({
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
  })
}