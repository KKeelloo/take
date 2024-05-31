package lab.movieShopServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "lab.movieShopServer.repositories")
public class MovieShopServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieShopServerApplication.class, args);

	}

}
