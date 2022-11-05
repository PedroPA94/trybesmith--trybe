import Joi from 'joi';
import { ILogin, IProduct, IUser } from '../interfaces';

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

export const loginSchema = Joi.object<ILogin>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const newOrderSchema = Joi.array().items(Joi.number().required()).required().messages({
  'any.required': '"productsIds" is required',
  'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
  'array.base': '"productsIds" must be an array',
});