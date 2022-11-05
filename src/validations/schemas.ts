import Joi from 'joi';
import { IProduct } from '../interfaces';

export const newProductSchema = Joi.object<IProduct>({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const template = {};