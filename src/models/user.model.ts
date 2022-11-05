import { Pool } from 'mysql2/promise';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
}