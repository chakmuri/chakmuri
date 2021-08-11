import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	font-family: Roboto;
	font-weight: 500;
	font-size: 20px;
	color: #ff6701;
	background-color: #ffffff;
	border: 1px solid #ff6701;
	box-sizing: border-box;
	border-radius: 30px;
	cursor: pointer;
	padding: 10px 20px;
	transition: all 0.3s;

	&:hover {
		color: #ffffff;
		background-color: #ff6701;
	}
`;

const Button = (props) => {
	return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
