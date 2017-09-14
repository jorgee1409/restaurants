import { Dish } from './dish';

export class Order {
  state: string;
  clientName: string;
  paymentTipe: string;
  total: number;
  detail: Dish[];
  date: Date;
}
