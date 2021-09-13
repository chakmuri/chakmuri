import styled from "styled-components";
import { customMedia } from "../../GlobalStyles";

const Tag = (props) => {
	return <StyledTag {...props}>{props.children}</StyledTag>;
};

export default Tag;

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

	${customMedia.lessThan("mobile")`
    font-size: 12px;
    padding: 5px;
    border-radius: 15px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
      font-size: 12px;
      padding: 5px 7px;
      border-radius: 15px;

  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 16px;
	  padding: 7px 13px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 16px;
	  padding: 7px 13px;
  `}

	&:hover {
		color: #ffffff;
		background-color: #f98404;
	}
`;
