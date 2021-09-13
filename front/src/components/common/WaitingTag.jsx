import styled from "styled-components";

const WaitingTag = (props) => (
	<StyledWaitingTag {...props}>{props.children}</StyledWaitingTag>
);

export default WaitingTag;

const StyledWaitingTag = styled.div`
	width: 50px;
	font-family: Roboto;
	font-weight: bold;
	background-color: #01c72c;
	color: #ffffff;
	border: none;
	border-radius: 3px;
	text-align: center;
`;
