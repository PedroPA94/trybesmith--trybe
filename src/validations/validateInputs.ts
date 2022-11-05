import { IProduct, IUser } from '../interfaces';
import { newProductSchema, newUserSchema } from './schemas';

export function validateNewProduct(newProduct: IProduct): void {
  const { error } = newProductSchema.validate(newProduct);
  if (error) throw error;
}

export function validateNewUser(newUser: IUser): void {
  const { error } = newUserSchema.validate(newUser);
  if (error) throw error;
}
