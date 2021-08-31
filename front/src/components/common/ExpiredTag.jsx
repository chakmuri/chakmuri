import styled from "styled-components";

const ExpiredTag = (props) => (
	<StyledExpiredTag {...props}>{props.children}</StyledExpiredTag>
);

export default ExpiredTag;

const StyledExpiredTag = styled.div`
	width: 50px;
	font-family: Roboto;
	font-weight: bold;
	background-color: #ff0000;
	color: #ffffff;
	border: none;
	border-radius: 3px;
	text-align: center;
`;
