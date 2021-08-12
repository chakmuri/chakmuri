import React from 'react';
import styled from 'styled-components';

/**
 * 이 페이지에서만 사용되는 필터 버튼입니다.
 * 
 *  최신순, 인기순, ...등(자세한 건 추가 예정)으로 필터링해서 모든 독서 모임 카드를 렌더링합니다.
 */

const Wrapper = styled.button`
  border: solid 1px;
  padding: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.015em;

  .boardFilterIcon {
    width: 24px;
    height: 24px;
  }

  .boardFilterName {
    margin-left: 25px;
    margin-right: 25px;
  }

  .boardDownButton {
    width: 15px;
    height: 8px;
    cursor: pointer; /* 일단 여기만 적용 ... */
  }
  .
`;

const GatherFilter = (props) => {
  return <>
  <Wrapper>
    <img src="assets/images/boardFilterIcon.png" alt="icon" className="boardFilterIcon" />
    <span className="boardFilterName">최신순</span>
    <img src="assets/images/boardDownButton.png" alt="button" className="boardDownButton" />
  </Wrapper>
  </>;
}

export default GatherFilter;