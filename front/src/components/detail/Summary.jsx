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

const Wrapper = styled.section`
  border: 1.5px solid #FEA82F;
  border-radius: 10px;

  .summaryBox {
    display: flex;
    
  }

  .clubSummary {
    margin: 35px 70px 35px 70px;
    display: flex;
    flex-direction: column;
  }

  .clupName {
  margin-bottom: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  }

    .clubSummary > p { /* 자식 p태그 */
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 36px;
    }

  .boxes {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }

  .likedBox {
    display: inline-block;
    margin-right: 10px;

    width: 60px;
    height: 60px;

    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 5px;

    cursor: pointer;
  }

  .heartIcon {
    margin: 12px;
    width: 32px;
    height: 32px;
  }

  .rectText {
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
  }

`;

const Summary = (props) => {
  return <>
  <Wrapper>
    <div className="summaryBox">
      <img src="assets/images/summary.png" alt="img" />
      <div className="clubSummary">
        <h2 className="clupName"><img src="assets/images/icons/book.png" alt="icon" /> 독서모임 이름</h2>
        <p><img src="assets/images/icons/people.png" alt="icon" /> 독서모임 인원</p>
        <p><img src="assets/images/icons/schedule.png" alt="icon" /> 독서모임 일정</p>
        <p><img src="assets/images/icons/subject.png" alt="icon" /> 독서모임 주제</p>
        <div className="boxes">
          <div className="likedBox">
            <img className="heartIcon" src="assets/images/icons/heart.png" alt="icon" />
          </div>
            <Rectangle>
              <p className="rectText">참여 신청</p>
            </Rectangle>
        </div>
      </div>
    </div>
  </Wrapper>
    
  </>;
};

export default Summary;