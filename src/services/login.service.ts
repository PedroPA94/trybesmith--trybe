import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class LoginService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }
}