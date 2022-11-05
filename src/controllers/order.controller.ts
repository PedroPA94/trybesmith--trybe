import { Request, Response } from 'express';
import StatusCodes from '../helpers/httpStatusCodes';
import { IOrder } from '../interfaces';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  findAll = async (req: Request, res: Response) => {
    const orders: IOrder[] = await this.orderService.findAll();
    res.status(StatusCodes.OK).json(orders);
  };

  create = async (req: Request, res: Response) => {
    const userId = Number(req.body.user.id);
    const newOrder = req.body.productsIds;
    const createdOrder = await this.orderService.create(newOrder, userId);
    res.status(StatusCodes.Created).json(createdOrder);
  };
}