package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.likedclub.LikedClubCreateRequestDto;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.LikedClub;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.LikedClubRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class LikedClubService {
    private final LikedClubRepository likedClubRepository;
    private final UserRepository userRepository;
    private final ClubRepository clubRepository;


    @Transactional
    public LikedClub createLikedClub(LikedClubCreateRequestDto likedClubRequestDto) {
        final User user = userRepository.findById(likedClubRequestDto.getUserId())
                .orElseThrow();
        final Club club = clubRepository.findById(likedClubRequestDto.getClubId())
                .orElseThrow();
        log.info("findById 결과값 {}", likedClubRepository.findById(likedClubRequestDto.getClubId()));
        if (likedClubRepository.findById(likedClubRequestDto.getClubId()).isEmpty()) {
            club.changeLikes(club.getLikes() + 1); // 좋아요 버튼 클릭된 상태

            LikedClub postLikedClub = LikedClub.builder()
                    .user(user)
                    .club(club)
                    .build();
            return likedClubRepository.save(postLikedClub);
        }

        return null;

    }


    @Transactional
    public void deleteLikedClub(Long likeClubId) {
        LikedClub likedClub = likedClubRepository.findById(likeClubId)
                .orElseThrow();

        Club club = likedClub.getClub();
        club.changeLikes(club.getLikes() -1); // 좋아요 취소

        likedClubRepository.delete(likedClub);
    }

    @Transactional(readOnly = true)
    public Page<LikedClub> findAllUserLikedClubs(String userId, int page) {
        final User user = userRepository.findById(userId)
                .orElseThrow();
        PageRequest pageRequest = PageRequest.of((page - 1), 9, Sort.by(Sort.Direction.DESC, "id"));
        return likedClubRepository.findAllByUser(user, pageRequest);
    }
}