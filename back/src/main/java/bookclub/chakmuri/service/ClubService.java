package bookclub.chakmuri.service;

import aj.org.objectweb.asm.Label;
import bookclub.chakmuri.controller.club.ClubCreateRequestDto;
import bookclub.chakmuri.controller.club.ClubUpdateRequestDto;
import bookclub.chakmuri.domain.*;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.CommentRepository;
import bookclub.chakmuri.repository.LikedClubRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ClubService {
    private final ClubRepository clubRepository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    private final LikedClubRepository likedClubRepository;

    //TODO: 독서모임 생성, 수정할 때 시작일이 오늘 날짜보다 빠르면 예외처리 -> ??

    @Transactional
    public Club createClub(ClubCreateRequestDto requestDto, MultipartFile file) {
        //TODO : AWS s3 img upload 로직 짜기 (현재는 로컬 업로드)
        if (file != null) {
            String path = "C:\\chakmuri\\back\\src\\main\\resources\\image\\";
            String filePath = path + System.currentTimeMillis() + "_" + file.getOriginalFilename();
            try {
                file.transferTo(new File(filePath));
                requestDto.setImgUrl(filePath);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        Club club = requestDto.toEntity();
        Book book = new Book(requestDto.getBookTitle(), requestDto.getAuthor(),
                requestDto.getPublisher(), requestDto.getPublishedAt(),
                requestDto.getBookDescription());
        final Club newClub = convertToNewClub(club, book, requestDto.getUserId());
        return clubRepository.save(newClub);
    }

    //club 생성시에만 사용하는 메서드
    //파라미터로 받은 userId 값을 사용해 findById로 찾은 user 객체를 이용, 빌더로 entity 를 생성하는 역할
    private Club convertToNewClub(final Club club, final Book book, final String userId) {
        final User user = userRepository.findById(userId)
                .orElseThrow(); // -> TODO : UserNotFoundException 만들어서 넣기
        return Club.builder()
                .user(user)
                .title(club.getTitle())
                .contents(club.getContents())
                .imgUrl(club.getImgUrl())
                .minPersonnel(club.getMinPersonnel())
                .maxPersonnel(club.getMaxPersonnel())
                .startDate(club.getStartDate())
                .endDate(club.getEndDate())
                .tags(club.getTags())
                .likes(0)
                .book(book)
                .description(club.getDescription())
                .addressDetail(club.getAddressDetail())
                .addressStreet(club.getAddressStreet())
                .clubStatus(ClubStatus.ACTIVE)
                .build();
    }

    //독서모임 만료 처리 메서드
    private void changeClubStatus(Club club){
        if(LocalDate.now().isAfter(club.getEndDate())){
            club.changeStatus(ClubStatus.EXPIRED);
        }
        else club.changeStatus(ClubStatus.ACTIVE);
    }

    private void changeAllClubStatus(){
        List<Club> clubList = clubRepository.findAll();
        for(Club club : clubList){
            changeClubStatus(club);
        }
    }

    //독서모임 검색조건 조회
    //param 으로 아예 tags 나 keyword 를 포함하지 않을 수도 있기 때문에 ==null 로 비교
    public List<Club> findAllClubs(String sortBy, String tags, ClubStatus clubStatus, String keyword) {
        //클럽 모집 여부 상태 확인
        changeAllClubStatus();

        //sortBy 정렬
        List<Club> clubs;
        Sort sort = Sort.by(Sort.Direction.DESC, sortBy);
        clubs = clubRepository.findAll(sort);

        //모집중 만 필터링
        if(clubStatus != null){
            clubs.removeIf(club -> club.getClubStatus().equals(ClubStatus.EXPIRED));
        }

        //tag와 keyword 값 확인 -> 둘 다 없으면 sortBy만 적용해서 리턴
        if(tags == null && keyword == null){
            return clubs;
        }

        //keyword 필터링 -> clubs 항목들의 제목이 keyword 를 포함하고 있는가
        List<Club> clubSortedByKeyword = new ArrayList<>();

        if(keyword == null)
            clubSortedByKeyword = clubs;
        else {
            for(Club club: clubs){
                if(club.getTitle().contains(keyword)) {
                    clubSortedByKeyword.add(club);
                }
            }
        }

        if(tags == null)
            return clubSortedByKeyword;

        //tag 필터링
        //TODO: 태그 여러 개 적용해서 조회 시 항목이 중복에서 출력되는 문제 해결
        List<Club> clubSortedByTags = new ArrayList<>();
        List<String> tag = Arrays.asList(tags.split(", "));
        for(Club club : clubSortedByKeyword){
            List<String> originTag = Arrays.asList(club.getTags().split(", "));
            for(String tagString : tag){
                if(originTag.contains(tagString))
                    clubSortedByTags.add(club);
            }
        }

        return clubSortedByTags;
    }

    public Club findClubById(Long clubId) {
        Club club = clubRepository.findById(clubId).orElseThrow();// -> TODO : ClubNotFoundException 만들기
        changeClubStatus(club);
        return club;
    }

    public Club findClubByUserId(String userId) {
        User user = userRepository.findById(userId).orElseThrow(); // -> TODO : UserNotFoundException 만들어서 넣기
        Club club = clubRepository.findByUser(user).orElse(null);
        if(club != null){
            changeClubStatus(club);
        }
        return club;
    }

    @Transactional
    public void updateClub(ClubUpdateRequestDto requestDto, String userId) {
        final Club club = findClubByUserId(userId);
        Book book = new Book(requestDto.getBookTitle(), requestDto.getAuthor(),
                requestDto.getPublisher(), requestDto.getPublishedAt(),
                requestDto.getBookDescription());
        changeClubStatus(club);
        club.updateClub(requestDto.getTitle(),
                requestDto.getContents(),
                requestDto.getImgUrl(),
                requestDto.getMinPersonnel(),
                requestDto.getMaxPersonnel(),
                requestDto.getStartDate(),
                requestDto.getEndDate(),
                requestDto.getTags(),
                book,
                requestDto.getDescription(),
                requestDto.getAddressDetail(),
                requestDto.getAddressStreet());
    }

    @Transactional
    public void deleteClub(String userId) {
        final Club club = findClubByUserId(userId);
        commentRepository.deleteAllByClubId(club.getId());
        likedClubRepository.deleteByClubId(club.getId());
        clubRepository.delete(club);
    }
}