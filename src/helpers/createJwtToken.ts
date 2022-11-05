import 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

const createJwtToken = (user: IUser) => {
  const { password, ...rest } = user;
  return jwt.sign({ rest }, process.env.JWT_SECRET as string);
};

export default createJwtToken;