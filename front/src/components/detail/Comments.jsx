import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Pagination from '../common/Pagination'

/**
 * 댓글 파트 컴포넌트 입니다.
 * 이 파트에서는 특정한 독서모임 회원들의 댓글들을 등록, 수정, 삭제를 할 수 있습니다.
 */

const Wrapper = styled.section`

  .commentsStart {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;

    text-align: left;
    margin-bottom: 15px;
  }

  .commentsBox {
    border: 1px solid #FEA82F;
    box-sizing: border-box;
    border-radius: 10px;
    padding-bottom: 30px;
  }

  .commentsInput {
    border: 1px solid #C4C4C4;
    border-radius: 100px;
    text-align: left;
    margin: 40px 78px 25px 78px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  .commentsProfile {
    margin: 11px 14px 11px 11px;
  }

  .commentsInputForm { 
    width: 700px;

    border: none;
    outline: none;
  }

  .commentsAdd {
    color: #F98404;
    cursor: pointer;
  }
`;

const Comments = (props) => {
  return (
    <Wrapper>
      <h2 className="commentsStart">
        <img src="assets/images/icons/comments.png" alt="icon" />  이 독서모임 댓글 (50+)
      </h2>
      <div className="commentsBox">
        <div className="commentsInput">
          <img className="commentsProfile" src="assets/images/icons/profile.png" alt="profile" />
          <input className="commentsInputForm" type="text" placeholder="댓글을 입력하세요..." />
          <span className="commentsAdd" >개시</span>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Pagination />
      </div>
    </Wrapper>
  );
};

export default Comments;