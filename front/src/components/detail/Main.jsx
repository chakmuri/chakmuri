import React from "react";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import DetailInfo from "./DetailInfo";
import CommentList from "./CommentList";

const Wrapper = styled.div`
	width: 996px;
	margin: 50px auto;
`;

const Main = () => {
	return (
		<Wrapper>
			<InfoBox />
			<DetailInfo />
			<CommentList />
		</Wrapper>
	);
};

export default Main;
