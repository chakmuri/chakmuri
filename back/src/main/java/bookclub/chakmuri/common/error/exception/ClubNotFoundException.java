package bookclub.chakmuri.common.error.exception;

import bookclub.chakmuri.common.Messages;

public class ClubNotFoundException extends BusinessException {
    public ClubNotFoundException() {
        super(Messages.NO_CLUB_MESSAGE);
    }
}