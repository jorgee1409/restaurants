import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent{
  public orders: Order[] = null;
  constructor(private orderService: OrderService) {
    this.orderService.getOrders()
      .subscribe(data =>{
        this.orders = data;
      });
  }
}

export class Order{
  state: string;
  clientName: string;
  paymentTipe: string;
  total: number;
  detail: Dish[];
  date: Date;
}

export class Dish{
  dishName:string;
  price: number;
}
