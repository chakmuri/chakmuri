import React from "react";
import styled from "styled-components";
import GatherCards from "../common/GatherCards";
import GatherFilter from "../board/GatherFilter";
import GatherBox from "./GatherBox";

/**
 * 책무리의 등록된/마감된 모든 독서 모임들을 렌더링해주는 영역입니다.
 * 기본적으로, DB에 있는 전체 독서 모임 데이터를 받아와서 전체를 렌더링합니다.
 * 유튜브, 페이스북과 같은 무한 스크롤입니다.
 *
 * 모집중 -> 마감된 독서 모임을 제외합니다.
 * 필터 -> 최신순, 인기순, ...등으로 독서 모임 리스트를 필터링하여 렌더링합니다.
 */

const GatherBar = styled.article`
	font-family: Roboto;
	font-style: normal;

	margin-top: 100px;
	margin-bottom: 40px;

	display: flex;
	justify-content: space-between;
`;

const GatherBarText = styled.h2`
	display: inline-block;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	display: flex;
	align-items: center;
	text-align: center;

	letter-spacing: -0.015em;
`;

const GatherBarFilter = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Cards = styled.section` /* 독서모임 카드 리스트가 렌더링되는 영역 */
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;

const Gather = (props) => {
	return (
		<>
			<GatherBar>
				<GatherBarText>N개의 독서 모임</GatherBarText>
				<GatherBarFilter>
					<GatherBox />
					<GatherFilter />
				</GatherBarFilter>
			</GatherBar>
			<Cards>
				<GatherCards />
				<GatherCards />
				<GatherCards />
			</Cards>
			<Cards>
				<GatherCards />
				<GatherCards />
				<GatherCards />
			</Cards>
			<Cards>
				<GatherCards />
				<GatherCards />
				<GatherCards />
			</Cards>
		</>
	);
};

export default Gather;
