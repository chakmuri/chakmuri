import React from 'react';
import styled from "styled-components";

/**
 * 공용 버튼 컴포넌트
 */

const ButtonStyle = styled.button`
  width: 150px;
  height: 45px;
  margin-top: 15px;
  margin-botton: 15px;
  margin-right: 25px;
  margin-left: 25px;

  background: #FFFFFF;
  border: 1px solid #F98404;
  box-sizing: border-box;
  border-radius: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  color: #F98404;
`;

const Button = (props) => {
  return <ButtonStyle>Button</ButtonStyle>;
};

export default Button;