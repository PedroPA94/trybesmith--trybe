import 'dotenv';
import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces';

const createJwtToken = (user: ILogin) => {
  const { id, username } = user;
  return jwt.sign({ id, username }, process.env.JWT_SECRET as string);
};

export default createJwtToken;