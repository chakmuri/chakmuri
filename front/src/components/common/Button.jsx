import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const StyledButton = styled.button`
	font-family: Roboto;
	font-weight: 500;
	font-size: 20px;
	padding: 7px 15px;
	cursor: pointer;
`;

const Button = (props) => {
	return (
		<StyledButton {...props} className={classnames("button", props.className)}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
