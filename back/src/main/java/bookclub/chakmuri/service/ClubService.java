package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.club.ClubCreateRequestDto;
import bookclub.chakmuri.controller.club.ClubUpdateRequestDto;
import bookclub.chakmuri.domain.Book;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.ClubStatus;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ClubService {
    private final ClubRepository clubRepository;
    private final UserRepository userRepository;

    @Transactional
    public Club createClub(ClubCreateRequestDto clubCreateRequestDto, MultipartFile file) {
        //userId NotNull 체크 -> 없어도 됨
        //TODO : AWS s3 img upload 로직 짜기 (현재는 로컬 업로드)
        if (file != null) {
            String path = "C:\\chakmuri\\back\\src\\main\\resources\\image\\";
            String filePath = path + System.currentTimeMillis() + "_" + file.getOriginalFilename();
            try {
                file.transferTo(new File(filePath));
                clubCreateRequestDto.setImgUrl(filePath);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        Club club = clubCreateRequestDto.toEntity();
        Book book = getBookObject(clubCreateRequestDto.getBooks());
        final Club newClub = convertToNewClub(club, book, clubCreateRequestDto.getUserId());
        return clubRepository.save(newClub);
    }

    private static JSONObject getJSONObjectFromString(String jsonString) {
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = null;
        try {
            jsonObject = (JSONObject) jsonParser.parse(jsonString);
            /**
             * jsonObject가 null일 때 프로그램 중단
             * if (jsonObject.isEmpty()) {
             *     throw new RuntimeException();
             * }
             */

        } catch (ParseException e) {
            e.printStackTrace();
            //throw new RuntimeException(); -> parseException 발생 시 프로그램 중단
        }
        return jsonObject;
    }

    private static Book getBookObject(String jsonString) {
        JSONObject book = getJSONObjectFromString(jsonString);
        return new Book(book.get("bookTitle").toString(),
                book.get("bookAuthor").toString(),
                book.get("bookImgUrl").toString());
    }

    //club 생성시에만 사용하는 메서드
    //파라미터로 받은 userId 값을 사용해 findById로 찾은 user 객체를 이용, 빌더로 entity를 생성하는 역할
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
                .bookDescription(club.getBookDescription())
                .description(club.getDescription())
                .addressDetail(club.getAddressDetail())
                .addressStreet(club.getAddressStreet())
                .clubStatus(ClubStatus.ACTIVE)
                .build();
    }

    public List<Club> findAllClubs() {
        List<Club> clubs = clubRepository.findAll();
        for(Club club : clubs){
            if(LocalDate.now().equals(club.getStartDate())){    //독서모임 만료 처리 로직
                club.changeStatus(ClubStatus.EXPIRED);
            }
        }
        return clubs;
    }

    public Club findClubById(Long clubId) {
        Club club = clubRepository.findById(clubId)
                .orElseThrow();// -> TODO : ClubNotFoundException 만들기
        if(LocalDate.now().equals(club.getStartDate())){    //독서모임 만료 처리 로직
            club.changeStatus(ClubStatus.EXPIRED);
        }
        return club;
    }

    public Club findClubByUserId(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(); // -> TODO : UserNotFoundException 만들어서 넣기
        return clubRepository.findByUser(user)
                .orElse(null);
    }

    //TODO: 시작일 변경시 상태 바꾸는 로직 추가, 시작일이 오늘 날짜보다 빠를때 -> ??
    @Transactional
    public void updateClub(ClubUpdateRequestDto clubUpdateRequestDto, String userId) {
        final Club club = findClubByUserId(userId);
        Book book = getBookObject(clubUpdateRequestDto.getBooks());
        club.updateClub(clubUpdateRequestDto.getTitle(),
                clubUpdateRequestDto.getContents(),
                clubUpdateRequestDto.getImgUrl(),
                clubUpdateRequestDto.getMinPersonnel(),
                clubUpdateRequestDto.getMaxPersonnel(),
                clubUpdateRequestDto.getStartDate(),
                clubUpdateRequestDto.getEndDate(),
                clubUpdateRequestDto.getTags(),
                book,
                clubUpdateRequestDto.getBookDescription(),
                clubUpdateRequestDto.getDescription(),
                clubUpdateRequestDto.getAddressDetail(),
                clubUpdateRequestDto.getAddressStreet());
    }

    @Transactional
    public void deleteClub(String userId) {
        final Club club = findClubByUserId(userId);
        clubRepository.delete(club);
    }
}