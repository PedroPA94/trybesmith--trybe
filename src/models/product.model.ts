import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(newProduct: IProduct): Promise<number> {
    const { name, amount } = newProduct;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return insertId;
  }

  async findAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return products;
  }

  async update(id: number, orderId: number): Promise<void> {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
      [orderId, id],
    );
  }
}