package bookclub.chakmuri.common.error.exception;

import bookclub.chakmuri.common.Messages;

public class UserNotFoundException extends BusinessException {
    public UserNotFoundException() {
        super(Messages.NO_USER_MESSAGE);
    }
}
