import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Pagination from '../common/Pagination'

/**
 * 댓글 파트 컴포넌트 입니다.
 * 이 파트에서는 특정한 독서모임 회원들의 댓글들을 등록, 수정, 삭제를 할 수 있습니다.
 */

const CmtTitle = styled.h2` /* 이 독서모임 댓글 */
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

  img { /* 아이콘 */
    padding: 5px;
    margin-right: 5px;
  }
`;

const CmtSeciton = styled.section` /* 댓글 파트 */
  border: 1px solid #FEA82F;
  box-sizing: border-box;
  border-radius: 10px;
  padding-bottom: 30px;
`;

const CmtInput = styled.div` /* 댓글 입력창 */
  border: 1px solid #C4C4C4;
  border-radius: 100px;
  text-align: left;
  margin: 40px 78px 40px 78px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  img { /* 프로필 사진 */
    margin: 11px 14px 11px 11px;
  }

  input { /* 텍스트 입력창 */
    width: 700px;
    border: none;
    outline: none;
  }
`;

const CmtInputSubmit = styled.span` /* 개시 버튼 */
  color: #F98404;
  cursor: pointer;
`;

const Comments = (props) => {
  return (
    <>
      <CmtTitle>
        <img src="assets/images/icons/comments.png" alt="icon.png" /> 이 독서모임 댓글 (50+)
      </CmtTitle>
      <CmtSeciton>
        <CmtInput>
          <img src="assets/images/icons/profile.png" alt="profile" />
          <input type="text" placeholder="댓글을 입력하세요..." />
          <CmtInputSubmit>개시</CmtInputSubmit>
        </CmtInput>
        <Comment />
        <Comment />
        <Comment />
        <Pagination />
      </CmtSeciton>
    </>
  );
};

export default Comments;