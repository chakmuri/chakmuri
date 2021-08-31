package bookclub.chakmuri;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ChakmuriApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChakmuriApplication.class, args);
	}

}