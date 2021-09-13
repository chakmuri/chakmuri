package bookclub.chakmuri.common.error.exception;

public class BusinessException extends RuntimeException {
    protected BusinessException(String message) {
        super(message);
    }
}