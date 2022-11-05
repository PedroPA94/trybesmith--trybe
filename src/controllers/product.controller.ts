import { Request, Response } from 'express';
import StatusCodes from '../helpers/httpStatusCodes';
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
    res.status(StatusCodes.Created).json({ id, ...newProduct });
  };

  findAll = async (req: Request, res: Response) => {
    const products = await this.productService.findAll();
    res.status(StatusCodes.OK).json(products);
  };
}