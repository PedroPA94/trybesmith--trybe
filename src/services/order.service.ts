import { IOrder } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async findAll(): Promise<IOrder[]> {
    return this.orderModel.findAll();
  }
}
