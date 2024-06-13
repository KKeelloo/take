import { Component } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie?: Movie;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location){}

  ngOnInit(){
    const pathId = this.route.snapshot.paramMap.get('id');
    if(pathId){
      this.moviesService.getMovie(pathId).subscribe(movie => this.movie = movie)
    }
  }
  goBack(): void {
    this.location.back();
  }
}
