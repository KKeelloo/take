package lab.movieShopServer.dto;

import lab.movieShopServer.models.Movie;

import java.util.List;

public class MoviesArrayDTO {
    private List<Movie> movies;

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }
}