package bookclub.chakmuri.common.error.exception;

import bookclub.chakmuri.common.Messages;

public class MemberNotFoundException extends BusinessException {
    public MemberNotFoundException() {
        super(Messages.NO_MEMBER_MESSAGE);
    }
}
