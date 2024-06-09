import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies!: Movie[];
  filter = '';
  constructor(private moviesService: MoviesService){}
  getMovies(): void{
    this.moviesService.getMovies(this.filter).subscribe(movies => this.movies = movies);
  }
  ngOnInit(){
    this.getMovies();
  }
  addFilter(filter: string){
    this.filter = filter;
    this.getMovies();
  }
  addToCart(movie: Movie): void{
    //TODO
  }
}
