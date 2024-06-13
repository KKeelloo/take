import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { CartsService } from './carts.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShoppingCartComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    MoviesService,
    CartsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
