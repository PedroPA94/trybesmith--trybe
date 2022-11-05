import OrderService from '../services/order.service';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }
}