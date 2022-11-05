import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async create(newProduct: IProduct): Promise<number> {
    return this.productModel.create(newProduct);
  }
}