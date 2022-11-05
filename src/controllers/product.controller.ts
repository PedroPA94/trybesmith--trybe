import { Request, Response } from 'express';
import { SuccessfulRequest } from '../helpers/httpStatusCodes';
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
    res.status(SuccessfulRequest.Created).json({ id, ...newProduct });
  };
}