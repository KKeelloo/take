import { Component } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie Shop';
  constructor(private cartsService: CartsService){}
  
  setClientID(clientId: string){
    if (clientId.length == 0)
      clientId = "0";
    this.cartsService.setClientID(+clientId);
  }
}
