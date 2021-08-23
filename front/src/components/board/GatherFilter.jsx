import React from "react";
import styled from "styled-components";

/**
 * 이 페이지에서만 사용되는 필터 버튼입니다.
 *
 *  최신순, 인기순(==좋아요순) 으로 필터링해서 모든 독서 모임 카드를 렌더링합니다.
 */

const GatherFilterButton = styled.button` /* 수정 예정 2021.08.23 */
  border: solid 2px #C4C4C4;
  cursor: pointer; /* 클릭 시, 밑으로 내려가면서 최신순, 좋아요순 표시 ! */
  padding: 8px;
`;

const GatherFilterAlignIcon = styled.span`
  width: 24px;
  height: 24px;
  margin: 10px;
`;

const GatherFilterText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.015em;

  margin-left: 8px;
`;

const GatherFilterDownIcon = styled.span`
  width: 15px;
  height: 8px;
  margin: 10px 10px 20px 15px;
`;

const GatherFilter = (props) => {
	return (
		<GatherFilterButton>
      <GatherFilterAlignIcon>
        <img src="assets/images/boardFilterIcon.png" alt="icon.png" />
      </GatherFilterAlignIcon>
			<GatherFilterText>최신순</GatherFilterText>
			<GatherFilterDownIcon>
        <img src="assets/images/boardDownButton.png" alt="icon.png" />
      </GatherFilterDownIcon>
			
		</GatherFilterButton>
	);
};

export default GatherFilter;
