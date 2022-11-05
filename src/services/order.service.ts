import { IOrder } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import { validateNewOrder } from '../validations/validateInputs';

export default class OrderService {
  orderModel: OrderModel;

  productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  async findAll(): Promise<IOrder[]> {
    return this.orderModel.findAll();
  }

  async create(newOrder: number[], userId: number): Promise<IOrder> {
    validateNewOrder(newOrder);
    const orderId: number = await this.orderModel.create(userId);

    const productsInsertion = await newOrder.map(async (id) => {
      await this.productModel.update(id, orderId);
    });
    await Promise.all(productsInsertion);

    return { userId, productsIds: newOrder };
  }
}
