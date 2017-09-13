import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CajeroService } from '../../services/cajero.service';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.scss']
})
export class CajeroComponent{
  clientName:string = "";
  clients: Client[]=[];
  date: Date;
  categories: any[]=[];
  selectedValue:string;
  dishes: any;
  constructor(private cajeroService: CajeroService) {
    let client1: Client,
        client2: Client;
    client1 = new Client("Jorge Espinoza", false);
    client2 = new Client("Carlos Espinoza", false);
    this.clients.push(client1);
    this.clients.push(client2);

    this.date = new Date();

    this.categories = [
      {name:"Efectivo", selected:false},
      {name:"Tarjeta", selected:false}
    ];
    this.dishes = [
      {name:"Lomo Saltado", price: 15, selected: false},
      {name:"Arroz con Pollo", price: 14, selected: false}
    ]
  }

  updateDish(dish){
    dish.selected = !dish.selected;
  }

  openModal(){
    document.getElementById("myModal").style.display = "block";
  }

  closeModal(){
    document.getElementById("myModal").style.display = "none";
  }

  modalCancelar(){
    this.closeModal();
  }

  modalAceptar(){
    this.closeModal();
  }

  selectClient(client){
    this.clientName = client.name;
  }
  deleteOptions(){
    for (let i = 0; i < this.clients.length; i++) {
        this.clients[i].selected = false;
    }
  }

  addNewClient(){
    let input = document.getElementById("newClient");
    if(input.style.display != "block"){
      input.style.display = "block";
    }else{
      input.style.display = "none";
    }
  }

  getSum(){
    let sum = 0;
    for (let i = 0; i < this.dishes.length; i++) {
        if(this.dishes[i].selected){
          sum += this.dishes[i].price;
        }
    }
    return sum;
  }

  onsubmit(){
    if(!this.clientName || !this.selectedValue || !this.dishes){
      console.log("Campos inválidos");
      return;
    }

    let detail: any[] = [];
    for (let i = 0; i < this.dishes.length; i++) {
        if(this.dishes[i].selected){
          detail[i]= this.dishes[i];
        }
    }

    let newOrder = {
      state: "Comanda",
      clientName: this.clientName,
      paymentTipe: this.selectedValue,
      total: this.getSum(),
      detail: detail,
    }
    this.cajeroService.addOrder(newOrder)
      .subscribe( order =>{
        console.log(order);
      });

    this.clientName = "";
    this.date = new Date();

    for (let i = 0; i < this.dishes.length; i++) {
        this.dishes[i].selected = false;
    }

  }
}


export class Client{
  name:string;
  selected: boolean;
  constructor(name: string, selected: boolean){
    this.name = name;
    this.selected = selected;
  }
}
