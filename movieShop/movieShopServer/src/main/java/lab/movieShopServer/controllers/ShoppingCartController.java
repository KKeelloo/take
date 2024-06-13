package lab.movieShopServer.controllers;

import jakarta.validation.Valid;
import lab.movieShopServer.models.Movie;
import lab.movieShopServer.models.ShoppingCart;
import lab.movieShopServer.repositories.ShoppingCartRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/shoppingCart")
public class ShoppingCartController {
    private final ShoppingCartRepository shoppingCartRepository;
    public ShoppingCartController(ShoppingCartRepository shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }

    @GetMapping()
    public ShoppingCart getShoppingCart(@RequestParam("clientId") Long clientId) {

        ShoppingCart cart = shoppingCartRepository.findCart(clientId);
        if(cart == null){
            cart = new ShoppingCart();
            cart.setClientId(clientId);
            cart.setStatus("open");
            cart.setMovies(new ArrayList<>());
            shoppingCartRepository.save(cart);
        }
        return cart;
    }

    @PutMapping("/addMovie")
    public ShoppingCart addMovie(@RequestParam("clientId") Long clientId, @RequestBody @Valid Movie movie) {
        ShoppingCart cart = shoppingCartRepository.findCart(clientId);
        if(cart == null) {
            cart = new ShoppingCart();
            cart.setClientId(clientId);
            cart.setStatus("open");
            cart.setMovies(new ArrayList<>());
        }
        System.out.println("wtf");
        List<Movie> movies = cart.getMovies();
        movies.add(movie);
        cart.setMovies(movies);
        shoppingCartRepository.save(cart);
        return cart;
    }

    @DeleteMapping("/deleteMovie/{id}")
    public ShoppingCart deleteMovie(@PathVariable Long id, @RequestParam("clientId") Long clientId) {
        ShoppingCart cart = shoppingCartRepository.findCart(clientId);
        if(cart == null) {
            return null;
        }
        List<Movie> movies = cart.getMovies();
        cart.setMovies(movies.stream().filter(m -> !Objects.equals(m.getId(), id)).toList());
        shoppingCartRepository.save(cart);
        return cart;
    }

    @PutMapping("/{id}/endShopping/")
    public void endShopping(@PathVariable Long id) {
        ShoppingCart cart = shoppingCartRepository.findById(id);
        if(cart == null) {
            return;
        }
        cart.setStatus("closed");
        shoppingCartRepository.save(cart);
    }
}
