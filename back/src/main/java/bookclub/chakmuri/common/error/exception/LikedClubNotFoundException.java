package bookclub.chakmuri.common.error.exception;

import bookclub.chakmuri.common.Messages;

public class LikedClubNotFoundException extends BusinessException {
    public LikedClubNotFoundException() {
        super(Messages.NO_LIKED_CLUB_MESSAGE);
    }
}
