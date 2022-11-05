import { ErrorRequestHandler } from 'express';
import { FailedRequest } from '../helpers/httpStatusCodes';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { message } = err;
  let { name } = err;
  if (message.includes('must be')) name = 'InvalidValue';
  const code: number = FailedRequest[name] as unknown as number;
  res.status(code).json({ message });
};

export default errorMiddleware;