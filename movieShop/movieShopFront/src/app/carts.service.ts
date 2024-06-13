import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from './cart';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private clientID$ = new BehaviorSubject<number>(0);
  currentClientId$ = this.clientID$.asObservable();
  private cartApiUrl = 'http://localhost:8080/shoppingCart';
  constructor(private http: HttpClient) {}
  setClientID(clientId: number){
    this.clientID$.next(clientId);
  }
  addMovie(movie: Movie){
    console.log(movie);
    const url = `${this.cartApiUrl}/addMovie?clientId=${this.clientID$.value}`;
    console.log(url);
    console.log(this.http.put(url, movie, httpOptions));
  }
  getCart(): Observable<Cart>{
    console.log(this.clientID$.value);
    const url = `${this.cartApiUrl}?clientId=${this.clientID$.value}`;
    console.log(url);
    return this.http.get<Cart>(url);
  }
  deleteMovie(movieId: number): Observable<Cart>{
    const url = `${this.cartApiUrl}/deleteMovie/${movieId}?clientId=${this.clientID$.value}`;
    return this.http.delete<Cart>(url);
  }
}
