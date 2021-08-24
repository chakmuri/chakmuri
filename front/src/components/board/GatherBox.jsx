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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: inline-block;
    align-items: center;
    text-align: center;
  }

  .check {
    margin: 0px 25px 0px 5px;
    cursor: pointer;
  }
`;

const GatherBox = (props) => {
  return (
    <Wrapper>
      <p>모집중</p>  
      <span className="check">
        <img className="checkBox" src="assets/images/boardCheckBox.png" alt="checkBox"/>
      </span>
    </Wrapper>
  );
};

export default GatherBox;