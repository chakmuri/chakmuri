import React from "react";
import styled from "styled-components";
import { Select } from 'antd';

const { Option } = Select;

/**
 * 이 페이지에서만 사용되는 필터 버튼입니다.
 *
 *  최신순, 인기순(==좋아요순) 으로 필터링해서 모든 독서 모임 카드를 렌더링합니다.
 */

const GatherFilterButton = styled(Select)`
  margin-top: 3px; /* 모집중 필터와 간격 맞추기 ! */
`;

const GatherFilter = (props) => {
	return (
		<GatherFilterButton defaultValue="최신순" style={{ width: 180 }}>
      <Option value="최신순">
        <img src="assets/images/boardFilterIcon.png" alt="icon.png" /> 최신순
      </Option>
      <Option value="좋아요순">
      <img src="assets/images/boardFilterIcon.png" alt="icon.png" /> 좋아요순
      </Option>
    </GatherFilterButton>
    
	);
};

export default GatherFilter;
