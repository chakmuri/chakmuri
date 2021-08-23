import React from 'react';
import styled from 'styled-components';

/**
 * 모집중 박스 컴포넌트 입니다.
 */

const GatherBoxContainer = styled.div`
  display: flex;
  align-items: center;

`;

const GatherBoxText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
`;

const  GatherBoxIcon = styled.div` /* 수정 예정 - 2021.08.23 */
  margin: 0px 25px 0px 5px;
  cursor: pointer; /* 클릭 시, boardCheckedBox.png로 변경! */
`;

const GatherBox = (props) => {
  return (
    <GatherBoxContainer>
      <GatherBoxText>모집중</GatherBoxText>
      <GatherBoxIcon>
        <img src="assets/images/boardCheckBox.png" alt="icon.png"/>
      </GatherBoxIcon>
    </GatherBoxContainer>
  );
};

export default GatherBox;