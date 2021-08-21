package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.club.ClubCreateRequestDto;
import bookclub.chakmuri.controller.comment.CommentCreateRequestDto;
import bookclub.chakmuri.controller.comment.CommentResponseDto;
import bookclub.chakmuri.controller.comment.CommentUpdateRequestDto;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Comment;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.CommentRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

import static lombok.Lombok.checkNotNull;

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
//        checkNotNull(userId, "userId must be provided");
//        checkNotNull(clubId, "clubId must be provided");

        /**
         *
         private String userId; // 유저 아이디
         private Long clubId; // 모임 페이지 번호
         private String contents; // 댓글 내용
         */
        Comment comment = commentCreateRequestDto.toEntity();
        String userId = commentCreateRequestDto.getUserId();
        Long clubId = commentCreateRequestDto.getClubId();

        //convertToComment:
        final Comment newComment = convertToComment(comment, userId, clubId);
        return commentRepository.save(newComment);

    }

    private Comment convertToComment(final Comment comment, final String userId, final Long clubId) {
        final User user = userRepository.findById(userId)
                .orElseThrow();// UserNotFoundException::new 추가하기
        final Club club = clubRepository.findById(clubId)
                .orElseThrow(); // ClubNotFoundException::new 추가하기

        return Comment.builder()
                .contents(comment.getContents())
                .club(club)
                .user(user)
                .build();
    }

    // 댓글 수정
    // TODO: commentId 예외처리하기, checkArgument(lectureId > 0, "lectureId must be positive number"); import 안됨.
    @Transactional
    public void updateComment(CommentUpdateRequestDto commentUpdateRequestDto, Long commentId) {
/**
 * commentUpdateRequestDto.toEntity(),
 *                 commentId,
 *                 commentUpdateRequestDto.getUserId()
 */
        String userId = commentUpdateRequestDto.getUserId();
        String contents = commentUpdateRequestDto.getContents();
        final User user = userRepository.findById(userId)
                .orElseThrow();   // TODO: UserNotFoundException::new 추가하기

        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow();   // TODO: CommentNotFoundException::new 추가하기

        comment.changeComment(contents);
        // commentRepository.save(comment); 해줄 필요 없다 -> 변경 감지 활용

    }
    @Transactional
    public void deleteComment(final Long commentId) {
        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(); // TODO: CommentNotFoundException::new 추가하기

        commentRepository.delete(comment);

//        userRepository.findById(comment.getUser().getId()) // 댓글을 등록한 유저가 맞다면, 댓글을 삭제할 수 있습니다.
//                .orElseThrow(); // TODO: UserNotFoundException::new 추가하기


    }
    //TODO: 존재하지 않는 모임에 대한 검증 추가
    public List<Comment> findAllClubComments(Long clubId) {
        final Club club = clubRepository.findById(clubId)
                .orElseThrow(); // TODO: ClubNotFoundException::new 추가하기

        return commentRepository.findAllByClubOrderByCreatedAtDesc(club);


    }
}
