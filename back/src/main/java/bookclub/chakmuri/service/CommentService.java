package bookclub.chakmuri.service;

import bookclub.chakmuri.common.error.exception.ClubNotFoundException;
import bookclub.chakmuri.common.error.exception.CommentNotFoundException;
import bookclub.chakmuri.common.error.exception.UserNotFoundException;
import bookclub.chakmuri.controller.comment.CommentCreateRequestDto;
import bookclub.chakmuri.controller.comment.CommentUpdateRequestDto;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Comment;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.CommentRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final ClubRepository clubRepository;

    // 댓글 작성
    @Transactional // readOnly = false (기본값)
    public Comment createComment(CommentCreateRequestDto commentCreateRequestDto) {
        Comment comment = commentCreateRequestDto.toEntity();
        String userId = commentCreateRequestDto.getUserId();
        Long clubId = commentCreateRequestDto.getClubId();

        final Comment newComment = convertToComment(comment, userId, clubId);
        return commentRepository.save(newComment);
    }

    private Comment convertToComment(final Comment comment, final String userId, final Long clubId) {
        final User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);
        final Club club = clubRepository.findById(clubId)
                .orElseThrow(ClubNotFoundException::new);

        return Comment.builder()
                .contents(comment.getContents())
                .club(club)
                .user(user)
                .build();
    }

    // 댓글 수정
    @Transactional
    public void updateComment(CommentUpdateRequestDto commentUpdateRequestDto, Long commentId) {
        String contents = commentUpdateRequestDto.getContents();
        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(CommentNotFoundException::new);

        comment.changeComment(contents);
    }

    @Transactional
    public void deleteComment(final Long commentId) {
        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(CommentNotFoundException::new);

        commentRepository.delete(comment);
    }

    public Page<Comment> findAllClubComments(Long clubId, int page) {
        PageRequest pageRequest = PageRequest.of((page - 1), 5, Sort.by(Sort.Direction.DESC, "id"));
        return commentRepository.findAllByClubId(clubId, pageRequest);
    }

    public Page<Comment> findAllUserComments(String userId, int page) {
        User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);
        PageRequest pageRequest = PageRequest.of((page - 1), 10, Sort.by(Sort.Direction.DESC, "id"));
        return commentRepository.findAllByUser(user, pageRequest);
    }

    // 실제로 사용되지는 않음
    @Transactional
    public void deleteAll() {
        commentRepository.deleteAll();
    }
}