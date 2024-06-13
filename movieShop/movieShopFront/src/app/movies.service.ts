import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }
  private moviesApiUrl = 'http://localhost:8080/movies';
  getMovies(filter: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesApiUrl + '?genre=' + filter);
  }
  
  getMovie(movie: string){
    return this.http.get<Movie>(this.moviesApiUrl + '/'+movie);
  }
}
