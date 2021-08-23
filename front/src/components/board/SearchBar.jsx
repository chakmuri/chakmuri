import React from "react";
import styled from "styled-components";

/**
 * 독서 모임 찾기 - 검색 창 컴포넌트
 *
 *  원하는 키워드를 입력하면 입력한 값에 해당하는 독서 모임의 제목을 렌더링해줌.
 */

const Wrapper = styled.div`
	display: flex;
	justify-content: center;

	.searchBar {
		width: 588px;
		height: 48px;
		border: 1px solid;

		display: flex;
		align-items: center;
		margin-top: 53px;
		margin-bottom: 25px;

		letter-spacing: -0.015em;
	}

	.searchInput {
		border: none;
		outline: none;
		width: 540px;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
	}
`;

const SearchBar = (props) => {
	return (
		<Wrapper>
			<div className="searchBar">
				<img src="assets/images/search.png" alt="search" className="search" />
				<input type="text" placeholder="검색" className="searchInput" />
			</div>
		</Wrapper>
	);
};

export default SearchBar;
