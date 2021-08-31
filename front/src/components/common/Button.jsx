import styled from "styled-components";

const Button = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
	font-family: Roboto;
	font-weight: 500;
	font-size: 20px;
	padding: 7px 15px;
	border: none;
	outline: none;
	background-color: #ffffff;
	cursor: pointer;
`;
