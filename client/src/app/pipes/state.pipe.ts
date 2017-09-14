import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../classes/order';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(orders: Order[], args?: string): any {
    if(args == "Todo"){
      return orders;
    }
    return orders.filter(
      item => (item.state === args)
    );
  }

}
