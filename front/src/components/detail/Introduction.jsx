import React from 'react';
import styled from 'styled-components';
import Map from '../detail/Map';

/**
 * 상세 설명<Introduction> 파트입니다.
 * 
 *  이 파트는 크게
 *    1. 텍스트로 이루어진 독서모임에 대해서 설명하는 박스 (대략 2000자 이내)
 *    2. 독서모임에서 선정한 도서에 대해서 설명하는 박스 - 왼쪽엔 선정한 도서의 이미지, 도서명, 작가명 표시하고
 *        오른쪽엔 도서에 대한 설명글 표시
 *    3. 그리고 독서모임이 선정한 위치를 표시
 *  로 나눌 수 있습니다.
 * 
 */

const IntroTitle = styled.h2` /* 우리 독서 모임은 ... */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  margin-bottom: 15px;
  margin-top: 35px;

  img { /* 책 아이콘 */
    padding: 5px;
    margin-right: 5px;
  }
`;

const IntroSection = styled.section` /* 독서 모임 + 선정 도서 */
  border: 1px solid #FEA82F;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 30px;

  .bookDetail {

  }
`;

const IntroText = styled.p` /* 독서 모임 소개글 */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.015em;

  margin: 50px 70px 50px 70px;
`;

const BookContainer = styled.div` /* 선정 도서 소개 */
  display: flex;
`;

const BookSummary = styled.article` /* 도서 정보 요약 */
  border-right: solid 1px #FEA82F;
`;

const BookSummaryInfo = styled.div`
  text-align: left;
  margin: 15px;
`;

const BookSummaryInfoName = styled.h2` /* 도서명 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.015em;

  color: #000000;
`;

const BookSummaryInfoAuthor = styled.h3` /* 작가명 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  color: #000000;

  margin-left: 15px;
`;

const BookDetail = styled.article` /* 선정 도서 소개글 */
  margin: 50px;
  text-align: left;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;
`;

const Introduction = (props) => {
  return (
    <>
      <IntroTitle>
        <img src="assets/images/icons/opendBook.png" alt="icon.png" /> 우리 독서모임은 ...
      </IntroTitle>
      <IntroSection>
        <IntroText>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum."
        </IntroText>
        <IntroText>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum."
        </IntroText>
      </IntroSection>
      <IntroSection>
        <BookContainer>
          <BookSummary>
            <img src="assets/images/thumbnail-detail.png" alt="thumbnail.png" />
            <BookSummaryInfo>
              <BookSummaryInfoName>"도서명"</BookSummaryInfoName>
              <BookSummaryInfoAuthor>"작가명"</BookSummaryInfoAuthor>
            </BookSummaryInfo>
          </BookSummary>
          <BookDetail>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui 
            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
            nulla pariatur?"<br /><br />

            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br /><br />

            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br /><br />

            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br /><br />

            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br />
            The standard Lorem Ipsum passage, used since the 1500s<br /><br />
          </BookDetail>
        </BookContainer>
      </IntroSection>
      <Map />
    </>
  );
};

export default Introduction;