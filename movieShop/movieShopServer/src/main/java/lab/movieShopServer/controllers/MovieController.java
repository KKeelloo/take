package lab.movieShopServer.controllers;

import jakarta.validation.Valid;
import lab.movieShopServer.dto.MoviesArrayDTO;
import lab.movieShopServer.models.Movie;
import lab.movieShopServer.repositories.MovieRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
    private final MovieRepository movieRepository;
    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @GetMapping
    public List<Movie> getMovies(@RequestParam(required = false) String genre) {
        if (!(genre == null || genre.isBlank())) {
            return movieRepository.findByGenre(genre);
        }
        return (List<Movie>) movieRepository.findAll();
    }

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    @PostMapping("/movies")
    public void addMovies(@RequestBody @Valid MoviesArrayDTO movies) {
        movieRepository.saveAll(movies.getMovies());
    }

    @PostMapping()
    public void addMovie(@RequestBody @Valid Movie movie) {
        movieRepository.save(movie);
    }
}
