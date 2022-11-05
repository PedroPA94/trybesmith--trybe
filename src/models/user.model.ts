import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(newUser: IUser): Promise<void> {
    const { username, classe, level, password } = newUser;
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }
}