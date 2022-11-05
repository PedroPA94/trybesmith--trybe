import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
}