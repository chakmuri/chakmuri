import React from 'react';
import styled from 'styled-components';

/**
 * 모집중 박스 컴포넌트 입니다.
 */

const Wrapper = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  p { 
    display: inline-block; /* 어떻게 해야 조금 더 이쁘게 꾸밀 수 있을까...?  */
  }

  .check {
    margin: 0px 25px 0px 5px;
    cursor: pointer;
  }
`;

const GatherBox = (props) => {
  return <>
    <Wrapper>
      <p>모집중</p>  
      <span className="check">
            <img className="checkBox" src="assets/images/boardCheckBox.png" alt="checkBox"/>
      </span>
      
    </Wrapper>
  </>;
};

export default GatherBox;