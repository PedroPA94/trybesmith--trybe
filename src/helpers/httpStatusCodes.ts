export enum SuccessfulRequest {
  OK = 200,
  Created,
}

export enum FailedRequest {
  ValidationError = 400,
  InvalidValue = 422,
}