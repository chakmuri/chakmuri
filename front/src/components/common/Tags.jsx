import React from "react";
import styled from "styled-components";

/**
 * 독서 모임 카드 안에 존재하는 다목적 공용 태그 컴포넌트 입니다.
 */

const Wrapper = styled.span`
	margin-right: 7px;
	padding: 4px 12px 4px 12px;
	background: #fea82f;
	border-radius: 30px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 27px;
	color: #ffffff;
`;

const Tags = (props) => {
	return <Wrapper>태그</Wrapper>;
};

export default Tags;
