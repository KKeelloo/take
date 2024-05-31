package lab.movieShopServer.repositories;

import lab.movieShopServer.models.ShoppingCart;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Integer> {
    @Query("select  c from ShoppingCart c "+
            "where c.status=\"open\" "+
            "and c.clientId = :clientId " +
            "ORDER BY c.id " +
            "LIMIT 1")
    ShoppingCart findCart(@Param("clientId") Long clientId);

    @Query("select  c from ShoppingCart c "+
            "where c.id = :id")
    ShoppingCart findById(@Param("id") Long id);
}
