import React from "react";
import styled from "styled-components";
import TagFilter from "./TagFilter";
import SearchBar from "./SearchBar";
import ClubList from "./ClubList";

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const Title = styled.div`
	font-size: 26px;
	font-weight: bold;
	text-align: center;
`;

const Main = (props) => {
	return (
		<Wrapper>
			<Title>독서모임 찾기</Title>
			<SearchBar />
			<TagFilter />
			<ClubList />
		</Wrapper>
	);
};

export default Main;
