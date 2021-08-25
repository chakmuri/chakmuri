import React from "react";
import styled from "styled-components";
import Summary from "../detail/Summary";
import Introduction from "./Introduction";
import Comments from "./Comments";

/**
 * 크게
 *
 *  1. 요약<Summary>와
 *  2. 상세 설명<Introduction> == 우리 독서 모임은 ...
 *  3. 이 독서모임 댓글
 *
 * 으로 나누었습니다.
 */

const Wrapper = styled.div`
	width: 996px;
	margin: 0 auto;

	text-align: center; /* 가운데 정렬 */
	margin-bottom: 50px;
`;

const Main = (props) => {
	return (
		<Wrapper>
			<Summary />
			<Introduction />
			<Comments />
		</Wrapper>
	);
};

export default Main;
