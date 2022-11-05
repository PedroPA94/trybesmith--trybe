export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface ILogin {
  id?: number;
  username: string;
  password: string;
}

export interface IUser extends ILogin {
  classe: string;
  level: number;
}

export interface IOrder {
  id?: number;
  userId: number;
  productsId?: number[];
}