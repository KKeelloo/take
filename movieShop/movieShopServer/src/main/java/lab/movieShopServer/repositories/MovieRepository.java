package lab.movieShopServer.repositories;

import lab.movieShopServer.models.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MovieRepository extends CrudRepository<Movie, Long> {
    @Query("select m from Movie m " +
            "where lower(m.genre) LIKE CONCAT('%', lower(:genre), '%')")
    List<Movie> findByGenre(String genre);
}
