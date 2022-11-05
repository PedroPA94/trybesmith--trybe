import LoginService from '../services/login.service';

export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }
}