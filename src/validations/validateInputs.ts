import { ILogin, IProduct, IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { loginSchema, newProductSchema, newUserSchema } from './schemas';

export function validateNewProduct(newProduct: IProduct): void {
  const { error } = newProductSchema.validate(newProduct);
  if (error) throw error;
}

export function validateNewUser(newUser: IUser): void {
  const { error } = newUserSchema.validate(newUser);
  if (error) throw error;
}

export async function validateLogin(loginData: ILogin): Promise<number> {
  const { error } = loginSchema.validate(loginData);
  if (error) throw error;

  const userModel = new UserModel(connection);
  const user = await userModel.findByUsername(loginData.username);

  if (!user || user.password !== loginData.password) {
    const e = new Error('Username or password invalid');
    e.name = 'Unauthorized';
    throw e;
  }

  return user.id as number;
}