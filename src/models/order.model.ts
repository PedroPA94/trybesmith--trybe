import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findAll(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
         FROM Trybesmith.Orders AS o
        INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
        GROUP BY o.id`,
    );
    return orders;
  }
}