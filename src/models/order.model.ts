import { Pool } from 'mysql2/promise';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
}