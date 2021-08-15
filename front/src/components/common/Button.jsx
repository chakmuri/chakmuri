import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	font-family: Roboto;
	font-weight: 500;
	font-size: 20px;
	box-sizing: border-box;
	cursor: pointer;
`;

const Button = (props) => {
	return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
