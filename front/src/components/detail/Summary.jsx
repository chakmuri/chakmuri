import React from 'react';
import styled from 'styled-components';
import Rectangle from '../common/Rectangle';

/**
 * 상세 페이지의 요약<Summary> 파트입니다.
 * 
 *  왼쪽에는 독서모임 생성시 저장한 이미지가 할당되며,
 *  오른쪽에는 독서모임의 이름, 인원, 일정, 주제가 있고,
 *  오른쪽 아래에는 좋아요 버튼과 참여신청 버튼이 있습니다.
 */

const SummarySection = styled.section`
  border: 1.5px solid #FEA82F;
  border-radius: 10px;
`;

const SummaryContainer = styled.div`
  display: flex;
`;

const SummaryClubs = styled.div`
  margin: 35px 70px 35px 70px;
  display: flex;
  flex-direction: column;
`;

const ClubName = styled.h2` /* 독서모임 이름 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  margin-bottom: 30px;
`;

const ClubPeople = styled.p` /* 독서모임 인원 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
`;

const ClubSchedule = styled.p` /* 독서모임 일정 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
`;

const ClubSubject = styled.p` /* 독서모임 주제 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
`;

const ClubBtns = styled.article` /* 하단 버튼 영역 */
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
const LikeBtn = styled.div` /* 좋아요 버튼 */
  display: inline-block;
  margin-right: 10px;

  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;

  width: 60px;
  height: 60px;

  cursor: pointer;

  img { /* 하트 아이콘 스타일링 */
    margin: 12px;
    width: 32px;
    height: 32px;
  }
`;
const EnrollText = styled.p` /* 참여 신청 텍스트 스타일링 */
  margin: 18px 54px 18px 54px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  color: #FFFFFF;
`;


const Summary = (props) => {
  return (
    <SummarySection>
      <SummaryContainer>
        <img src="assets/images/summary.png" alt="img" />
        <SummaryClubs>
          <ClubName><img src="assets/images/icons/book.png" alt="icon" /> 독서모임 이름</ClubName>
          <ClubPeople><img src="assets/images/icons/people.png" alt="icon" /> 독서모임 인원</ClubPeople>
          <ClubSchedule><img src="assets/images/icons/schedule.png" alt="icon" /> 독서모임 일정</ClubSchedule>
          <ClubSubject><img src="assets/images/icons/subject.png" alt="icon" /> 독서모임 주제</ClubSubject>
          <ClubBtns>
            <LikeBtn><img src="assets/images/icons/heart.png" alt="icon" /></LikeBtn>
              <Rectangle>
                <EnrollText>참여 신청</EnrollText>
              </Rectangle>
          </ClubBtns>
        </SummaryClubs>
      </SummaryContainer>
    </SummarySection>
  );
};

export default Summary;