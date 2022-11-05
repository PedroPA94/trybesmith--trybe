import { IProduct } from '../interfaces';
import { newProductSchema } from './schemas';

export function validateNewProduct(newProduct: IProduct): void {
  const { error } = newProductSchema.validate(newProduct);
  if (error) throw error;
}

export const template = {};