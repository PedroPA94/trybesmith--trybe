import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }
}