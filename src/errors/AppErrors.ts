export class BadRequestError extends Error {
  statusCode: number = 400;
  name: string = 'AppError';
  
  constructor(message: string) {
    super(message)
  }
}

export class UnauthorizedError extends Error {
  statusCode: number = 401;
  name: string = 'AppError';
  
  constructor(message: string) {
    super(message)
  }
}

export class UnprocessableEntityError extends Error {
  statusCode: number = 422;
  name: string = 'AppError';
  
  constructor(message: string) {
    super(message)
  }
}