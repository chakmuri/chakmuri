import React from "react";
import styled from "styled-components";
import Search from "../board/Search";
import Gather from "../board/Gather";

/**
 * Navbar, Footer을 제외한 보드 페이지의 고유한 영역입니다.
 *
 * 여기 보드 페이지는 크게
 *
 *    1. 독서 모임 찾기 영역 -> search.jsx 컴포넌트
 *    2. N개의 독서 모임 영역 -> gather.jsx 컴포넌트
 *
 * 영역으로 나뉩니다. :)
 */

const Wrapper = styled.section`
	width: 1200px;
	margin: 0 auto;
`;

const Main = (props) => {
	return (
		<Wrapper>
			<Search />
			<Gather />
		</Wrapper>
	);
};

export default Main;
