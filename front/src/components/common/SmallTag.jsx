import styled from "styled-components";
import classnames from "classnames";

const SmallTag = ({ ...props }) => {
	return (
		<StyledTag
			color="#fea82f"
			className={classnames("smallTag", props.className)}
		>
			{props.children}
		</StyledTag>
	);
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
