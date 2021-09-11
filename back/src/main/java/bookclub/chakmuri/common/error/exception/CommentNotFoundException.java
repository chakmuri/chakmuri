package bookclub.chakmuri.common.error.exception;

import bookclub.chakmuri.common.Messages;

public class CommentNotFoundException extends BusinessException{
    public CommentNotFoundException() {
        super(Messages.NO_COMMENT_MESSAGE);
    }
}
