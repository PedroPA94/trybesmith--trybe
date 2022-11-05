import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { validateNewProduct } from '../validations/validateInputs';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async create(newProduct: IProduct): Promise<number> {
    validateNewProduct(newProduct);
    return this.productModel.create(newProduct);
  }

  async findAll(): Promise<IProduct[]> {
    return this.productModel.findAll();
  }
}