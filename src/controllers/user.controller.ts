import { Request, Response } from 'express';
import StatusCodes from '../helpers/httpStatusCodes';
import { IUser } from '../interfaces';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const newUser: IUser = req.body;
    const token = await this.userService.create(newUser);
    res.status(StatusCodes.Created).json({ token });
  };
}