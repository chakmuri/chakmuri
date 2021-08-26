package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.club.ClubCreateRequestDto;
import bookclub.chakmuri.controller.club.ClubUpdateRequestDto;
import bookclub.chakmuri.domain.Book;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.ClubStatus;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.CommentRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
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

    //TODO: 독서모임 생성, 수정할 때 시작일이 오늘 날짜보다 빠르면 예외처리 -> ??

    @Transactional
    public Club createClub(ClubCreateRequestDto requestDto, MultipartFile file) {
        //userId NotNull 체크 -> 없어도 됨
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
        if(LocalDate.now().isAfter(club.getStartDate())){
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

    //독서모임 필터링해 조회
    public List<Club> findAllClubs(String sortBy, String tags, ClubStatus clubStatus) {
        changeAllClubStatus();

        String[] tagList = {"소수정예", "온라인", "오프라인", "온・오프라인", "수도권", "지방", "친목", "독서 외 활동"};

        //sortBy 정렬
        List<Club> clubs;
        if(sortBy.equals("likes")) {
            clubs = clubRepository.findAllByClubStatusOrderByLikesDesc(clubStatus);
        }else {
            clubs = clubRepository.findAllByClubStatusOrderByCreatedAt(clubStatus);
        }

        if(tags.isEmpty()){
            return clubs;
        }

        //http://localhost:8080/clubs?sortBy=createdAt&tags=온라인, 친목&clubStatus=ACTIVE
        //tag 필터링 TODO: tags에 들어가는 값이 없을 때 204가 뜨는 문제 고치기 (121번째 줄 문제)
        List<Club> clubList = new ArrayList<>();
        List<String> tag = Arrays.asList(tags.split(", "));
        for(Club club : clubs){
            System.out.println(club.getTags());//
            List<String> originTag = Arrays.asList(club.getTags().split(", "));
            for(String tagString : tag){
                System.out.println(tagString);//
                if(originTag.contains(tagString))
                    clubList.add(club);
            }
        }

        return clubList;
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
        clubRepository.delete(club);
    }
}