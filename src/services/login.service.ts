import createJwtToken from '../helpers/createJwtToken';
import { ILogin } from '../interfaces';
import { validateLogin } from '../validations/validateInputs';

export async function loginUser(loginData: ILogin): Promise<string> {
  const { username, password } = loginData;
  const id: number = await validateLogin(loginData);
  const token: string = createJwtToken({ id, username, password });
  return token;
}

export default loginUser;