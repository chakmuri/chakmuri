import styled from "styled-components";

const SmallTag = ({ ...props }) => {
	return <StyledTag color="#fea82f">{props.children}</StyledTag>;
};

export default SmallTag;

const StyledTag = styled.button`
	font-family: Roboto;
	font-weight: bold;
	color: #ffffff;
	background-color: #f98404;
	border: none;
	border-radius: 30px;
`;
