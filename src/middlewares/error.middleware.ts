import { ErrorRequestHandler } from 'express';
import StatusCodes from '../helpers/httpStatusCodes';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { message } = err;
  let { name } = err;
  if (message.includes('must be')) name = 'InvalidValue';
  const code: number = StatusCodes[name] as unknown as number || 500;
  res.status(code).json({ message });
};

export default errorMiddleware;