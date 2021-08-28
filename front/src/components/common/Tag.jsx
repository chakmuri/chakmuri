import styled from "styled-components";

const StyledTag = styled.button`
	font-size: 20px;
	color: ${(props) => (props.selected ? "#ffffff" : "#f98404")};
	background-color: ${(props) => (props.selected ? "#f98404" : "#ffffff")};
	border: 1px solid #f98404;
	border-radius: 30px;
	padding: 10px 20px;
	text-align: center;
	letter-spacing: 2px;
	cursor: pointer;

	&:hover {
		color: #ffffff;
		background-color: #f98404;
	}
`;

const Tag = (props) => {
	return <StyledTag {...props}>{props.children}</StyledTag>;
};

export default Tag;
