import styled from "styled-components";

const NotFound = (props) => {
	return <StyledNotFound>{props.children}</StyledNotFound>;
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
`;
