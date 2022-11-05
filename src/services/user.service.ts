import createJwtToken from '../helpers/createJwtToken';
import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { validateNewUser } from '../validations/validateInputs';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async create(newUser: IUser): Promise<string> {
    validateNewUser(newUser);
    const id: number = await this.userModel.create(newUser);
    return createJwtToken({ id, ...newUser });
  }
}