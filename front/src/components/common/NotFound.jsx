import styled from "styled-components";
import classnames from "classnames";
import { customMedia } from "../common/GlobalStyles";

const NotFound = (props) => {
	return (
		<StyledNotFound className={classnames("notFound", props.className)}>
			{props.children}
		</StyledNotFound>
	);
};

export default NotFound;

const StyledNotFound = styled.div`
	width: 100%;
	height: 100vh;
	font-family: Roboto;
	font-weight: bold;
	font-size: 26px;

	display: flex;
	justify-content: center;
	align-items: center;

	${customMedia.lessThan("desktop")`
    font-size: 20px;
  `}
`;
