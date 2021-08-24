import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

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

const  GatherBoxIcon = styled(Checkbox)` /* checked상태일 때, 디자인하는 방법? */
  margin: 0px 25px 0px 5px;
  cursor: pointer;

  .ant-checkbox {
    border: solid 5px;
  }

  .ant-checkbox-checked {
    color: #000000;
    background-color: #FFFFFF;
  }
`;

const GatherBox = (props) => {
  return (
    <GatherBoxContainer>
      <GatherBoxText>모집중</GatherBoxText>
      <GatherBoxIcon />
    </GatherBoxContainer>
  );
};

export default GatherBox;