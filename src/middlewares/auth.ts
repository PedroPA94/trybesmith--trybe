import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import 'dotenv';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    const e = new Error('Token not found');
    e.name = 'Unauthorized';
    throw e;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decoded;
    next();
  } catch (err) {
    const e = new Error('Invalid token');
    e.name = 'Unauthorized';
    throw e;
  }
};
