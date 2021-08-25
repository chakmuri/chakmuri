import React from 'react';
import styled from 'styled-components';

/**
 * 댓글 컴포넌트입니다.
 */

const CmtArticle = styled.article` /* 댓글 컴포넌트 */
  width: 816px;
  margin: 0px 102px 30px 78px;
  display: flex;
  text-align: left;

  img { /* 프로필 사진 */
    width: 50px;
    height: 50px;
  }
`;

const CmtContainer = styled.div` /* 회색 말풍선 박스 */
  width: 758px;
  display: inline-block;
  border-radius: 10px;
  margin-left: 8px;
  background: #F6F6F6;
  font-family: Roboto;
  padding: 20px 25px 25px 25px;
`;

const CmtWriter = styled.span` /* 댓글 작성자 */
font-weight: bold;
font-size: 20px;
line-height: 23px;
margin-right: 5px;
`;

const CmtDate = styled.span` /* 댓글 작성일 */
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #959595;
`;

const CmtUpdateCheck = styled.span` /* 댓글 수정 여부 */
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FEA82F;
  margin-left: 5px;
`;

const CmtUpdate = styled.span` /* 댓글 수정 */
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #959595;

  margin-left: 350px; /* 임시 레이아웃 */
  cursor: pointer;
`;

const CmtDelete = styled.span` /* 댓글 삭제 */
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FF0000;

  margin-left: 20px;
  cursor: pointer;
`;

const CmtText = styled.p` /* 댓글 내용 스타일링 */
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;
  margin: 10px 0px 0px 0px;
`;

const Comment = (props) => {
  return (
    <CmtArticle>
      <img src="assets/images/icons/profile.png" alt="profile" />
      <CmtContainer>
        <CmtWriter>작성자</CmtWriter>
        <CmtDate>yyyy-mm-dd hh:mm:ss</CmtDate>
        <CmtUpdateCheck>(수정됨)</CmtUpdateCheck>
        <CmtUpdate>수정</CmtUpdate>
        <CmtDelete>삭제</CmtDelete>
        <CmtText>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, <br />
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
          labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia 
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
          et dolore magnam aliquam quaerat voluptatem. 
        </CmtText>
      </CmtContainer>
    </CmtArticle>
  );
};

export default Comment;