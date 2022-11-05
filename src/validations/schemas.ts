import Joi from 'joi';
import { IProduct, IUser } from '../interfaces';

export const newProductSchema = Joi.object<IProduct>({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const newUserSchema = Joi.object<IUser>({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});
