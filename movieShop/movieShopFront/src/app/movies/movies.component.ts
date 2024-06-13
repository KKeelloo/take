import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies!: Movie[];
  clientId!: number;
  filter = '';
  constructor(private moviesService: MoviesService, private cartService: CartsService){}
  getMovies(): void{
    this.moviesService.getMovies(this.filter).subscribe(movies => this.movies = movies);
  }
  ngOnInit(){
    this.getMovies();
    this.cartService.currentClientId$.subscribe(clientId => this.clientId = clientId)
  }
  addFilter(filter: string){
    this.filter = filter;
    this.getMovies();
  }
  addToCart(movie: Movie): void{
    console.log(movie.id + " " + this.clientId)
    this.cartService.addMovie(movie);
  }
}
