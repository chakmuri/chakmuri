package bookclub.chakmuri.common.error;

import bookclub.chakmuri.common.Messages;
import bookclub.chakmuri.common.error.exception.BusinessException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MultipartException;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    /**
     * TODO: refactoring
     *  - 현재 처리하지 않는 예외들 목록
     *     NumberFormatException
     *     NullPointerException
     *     ConstraintViolationException
     *     MethodArgumentNotValidException
     *     ...etc.
     *  - 발견했으나 처리하지 않는 예외들 목록
     *     club 정보를 본인이 아닌 다른 사람이 수정, 삭제하려 할 때 예외처리 (comment 도 마찬가지 -> 현재 FE 측에서 막고 있음)
     *     put, post 시 잘못된 request 값을 보낼 때 예외처리
     *     club putMapping 시 int 값으로 저장되어야 하는 값을 String 으로 잘못 주면 BindException 발생 -> 예외처리
     *     club Sorting 시 clubStatus @RequestParam 값이 입력되기만 하면 ACTIVE 만 표시 -> ACTIVE 일때만 제대로된 결과값이 나오도록
     *     int 값을 음수로 할당하는 경우
     *   ++ (발견 시 추가 예정)
     */

    private ResponseEntity<ErrorResponse> newResponse(final ErrorResponse response, final HttpStatus status){
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<>(response, headers, status);
    }

    @ExceptionHandler(value = {Exception.class, RuntimeException.class})
    public ResponseEntity<ErrorResponse> handleUnexpectedException(RuntimeException e){
        log.error("handleUnexpectedException", e);

        final ErrorResponse response = ErrorResponse.of(Messages.UNEXPECTED_EXCEPTION_MESSAGE);
        return newResponse(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusinessException(BusinessException e){
        log.error("handleBusinessException", e);

        final ErrorResponse response = ErrorResponse.of(e.getMessage());
        return newResponse(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {
            IllegalStateException.class, IllegalArgumentException.class,
            TypeMismatchException.class, HttpMessageNotReadableException.class,
            MissingServletRequestParameterException.class, MultipartException.class
    })
    public ResponseEntity<ErrorResponse> handleBadRequestException(Exception e){
        log.debug("handleBadRequestException");

        final ErrorResponse response = ErrorResponse.of(e.getMessage());
        return newResponse(response, HttpStatus.BAD_REQUEST);
    }
}
