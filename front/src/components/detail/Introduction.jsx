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

const Wrapper = styled.section`
  margin-top: 35px;

  .introStart {
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
  }

  .introIcon {
    margin-right: 5px;
  }
`;

const IntroBoxes = styled.div`
  border: 1px solid #FEA82F;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 30px;

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.015em;

    margin: 50px 70px 50px 70px;
  }

  .bookIntro {
    display: flex;
    
  }

  .bookSummary {
    border-right: solid 1px #FEA82F;
  }

  .bookInfo {
    text-align: left;
    margin: 15px;
  }

    .bookInfo > h2 { /* 자식 태그 */
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      /* identical to box height */
      
      letter-spacing: -0.015em;
      
      color: #000000;
    }

    .bookInfo > h3 { /* 자식 태그 */
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
    }

  .bookDetail {
    margin: 50px;
    text-align: left;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.015em;
  }
`;

const Introduction = (props) => {
  return <>
    <Wrapper>
      <h2 className="introStart">
        <img className="introIcon" src="assets/images/icons/opendBook.png" alt="icon" /> 우리 독서모임은 ...
      </h2>
    </Wrapper>
    <IntroBoxes>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum."
      </p>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum."
      </p>
    </IntroBoxes>
    <IntroBoxes>
      <div className="bookIntro">
        <span className="bookSummary">
          <img src="assets/images/thumbnail-detail.png" alt="thumbnail.png" />
          <div className="bookInfo">
            <h2>"도서명"</h2>
            <h3>"작가명"</h3>
          </div>
        </span>
        <span className="bookDetail">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui 
          in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
          nulla pariatur?"<br></br><br></br>

          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br><br></br>

          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br><br></br>

          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br><br></br>

          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br>
          The standard Lorem Ipsum passage, used since the 1500s<br></br><br></br>
        </span>
      </div>
    </IntroBoxes>
    <Map />
  </>;
};

export default Introduction;