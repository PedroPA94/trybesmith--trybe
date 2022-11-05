import createJwtToken from '../helpers/createJwtToken';
import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async create(newUser: IUser): Promise<string> {
    await this.userModel.create(newUser);
    return createJwtToken(newUser);
  }
}