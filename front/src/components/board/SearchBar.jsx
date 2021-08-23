import React from "react";
import styled from "styled-components";

/**
 * 독서 모임 찾기 - 검색 창 컴포넌트
 *
 *  원하는 키워드를 입력하면 입력한 값에 해당하는 독서 모임의 제목을 렌더링해줌.
 */

const SearchBarSection = styled.section`
	display: flex;
	justify-content: center;
`;

const SearchBarContainer = styled.div`
	width: 588px;
	height: 48px;
	border: 2px solid #959595;

	display: flex;
	align-items: center;
	margin-top: 53px;
	margin-bottom: 25px;

	letter-spacing: -0.015em;
`;

// styled.input -> 에러 발생, 따라서, styled.div 안에 input {}으로 설정함.
const SearchBarInput = styled.div`
	input {
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
		<SearchBarSection>
			<SearchBarContainer>
				<img src="assets/images/search.png" alt="icon.png" />
				<SearchBarInput>
					<input type="text" placeholder="검색" />
				</SearchBarInput>
			</SearchBarContainer>
		</SearchBarSection>
	);
};

export default SearchBar;
