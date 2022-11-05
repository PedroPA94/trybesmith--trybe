import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';

export default class OrderService {
  orderModel: OrderModel;

  productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }
}