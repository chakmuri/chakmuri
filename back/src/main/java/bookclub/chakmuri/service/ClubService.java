package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.club.ClubDetailResponseDto;
import bookclub.chakmuri.repository.ClubRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ClubService {
    private final ClubRepository clubRepository;

}
