import styled from "styled-components";

const DdayTag = (props) => (
	<StyledDdayTag {...props}>{props.children}</StyledDdayTag>
);

export default DdayTag;

const StyledDdayTag = styled.div`
	width: 50px;
	font-family: Roboto;
	font-weight: bold;
	background-color: #01C72C
	color: #ffffff;
	border: none;
	border-radius: 3px;
	text-align: center;
`;
