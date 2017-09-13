import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CajeroService {

  constructor(private http: Http) { }

  getOrders(){
    return this.http.get('http://localhost:3000/api/orders')
      .map(res => res.json());
  }

  addOrder(newOrder){
    var headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/orders',JSON.stringify(newOrder), {headers: headers})
      .map(res => res.json());
  }

  deleteTask(id){
    return this.http.delete('http://localhost:3000/api/orders/' + id)
      .map(res => res.json());
  }

  updateTask(order){
    var headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.put('http://localhost:3000/api/orders/' + order._id,JSON.stringify(order), {headers: headers})
      .map(res => res.json());
  }
}
