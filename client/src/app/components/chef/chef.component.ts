import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { DatePipe } from '@angular/common';
import { Order } from '../../classes/order';
import { Dish } from '../../classes/dish';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent{
  orders: Order[] = null;
  selectedFilter:string = "Todo";

  constructor(private orderService: OrderService) {
    this.orderService.getOrders()
      .subscribe(data =>{
        this.orders = data;
      });
  }
  changeState(order:Order, state:string){
    order.state = state;
    this.orderService.updateOrder(order)
      .subscribe(data=>{
        console.log(data);
      });
  }
}
