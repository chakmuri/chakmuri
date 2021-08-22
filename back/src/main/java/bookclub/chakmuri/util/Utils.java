package bookclub.chakmuri.util;

import org.springframework.http.HttpStatus;

import java.util.List;

public class Utils {

    private Utils() { }

    public static <T> HttpStatus getStatusCode(final List<T> response) {
        return response.isEmpty()
                ? HttpStatus.NO_CONTENT
                : HttpStatus.OK;
    }
}
