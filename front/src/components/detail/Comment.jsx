import React from 'react';
import styled from 'styled-components';

/**
 * 댓글 컴포넌트입니다.
 */

const Wrapper = styled.div`
  width: 816px;
  margin: 0px 102px 30px 78px;
  text-align: left;

  display: flex;

  .commentProfile {
    width: 50px;
    height: 50px;
  }

  .commentContainer { /* 회색 말풍선 박스 */
    width: 758px;
    display: inline-block;
    border-radius: 10px;
    margin-left: 8px;
    background: #F6F6F6;
    font-family: Roboto;
    padding: 20px 25px 25px 25px;

    /* 여기서부터는 말풍선 박스 내부 */
    .commentWriter { // 댓글 작성자
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      margin-right: 5px;
    }
    .commentDate  { // 댓글 등록일
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #959595;
    }
    .commentUpdateCheck { // 댓글 수정 여부
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #FEA82F;
      margin-left: 5px;
    }
    .commentUpdate { // 댓글 수정
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #959595;

      margin-left: 350px; /* 임시 레이아웃 */
      cursor: pointer;
    }
    .commentDelete { // 댓글 삭제
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #FF0000;

      margin-left: 20px;
      cursor: pointer;
    }
    /* ~~ */

  .commentContents {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.015em;
    margin: 10px 0px 0px 0px;
  }
  }
`;

const Comment = (props) => {
  return (
    <Wrapper>
      <img className="commentProfile" src="assets/images/icons/profile.png" alt="profile" />
      <div className="commentContainer">
        <span className="commentWriter">작성자</span>
        <span className="commentDate">yyyy-mm-dd hh:mm:ss</span>
        <span className="commentUpdateCheck">(수정됨)</span>
        <span className="commentUpdate">수정</span>
        <span className="commentDelete">삭제</span>
        <p className="commentContents">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, <br></br>
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
          labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia 
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
          et dolore magnam aliquam quaerat voluptatem. 
        </p>
      </div>
    </Wrapper>
  );
};

export default Comment;