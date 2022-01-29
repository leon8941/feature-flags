export interface IUserFeatureCreateDTO {
  id: number,
  email: string,
  featureName: string,
  enabled: boolean,
}

export interface IUserFeatureSelectDTO {
  email: string,
  featureName: string,
}