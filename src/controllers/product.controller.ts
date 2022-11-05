import { Request, Response } from 'express';
import { successfulRequest } from '../helpers/sucessStatusCodes';
import { IProduct } from '../interfaces';
import ProductService from '../services/product.service';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  create = async (req: Request, res: Response) => {
    const newProduct: IProduct = req.body;
    const id = await this.productService.create(newProduct);
    res.status(successfulRequest.CREATED).json({ id, ...newProduct });
  };
}