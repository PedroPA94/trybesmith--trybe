import { Request, Response } from 'express';
import StatusCodes from '../helpers/httpStatusCodes';
import { ILogin } from '../interfaces';
import * as loginService from '../services/login.service';

export async function loginUser(req: Request, res: Response) {
  const loginData: ILogin = req.body;
  const token: string = await loginService.loginUser(loginData);
  res.status(StatusCodes.OK).json({ token });
}

export default loginUser;