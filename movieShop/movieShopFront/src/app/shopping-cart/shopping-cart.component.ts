import { Component } from '@angular/core';
import { Cart } from '../cart';
import { CartsService } from '../carts.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  shoppingCart!: Cart;

  constructor(private cartsService: CartsService){}
  ngOnInit() {
    this.cartsService.getCart().subscribe(cart => this.shoppingCart = cart);
  }
  deleteMovie(movie: Movie){
    this.cartsService.deleteMovie(movie.id).subscribe(cart => this.shoppingCart = cart);
  }
}
