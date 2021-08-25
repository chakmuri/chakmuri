import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import SearchBar from "../board/SearchBar";
import Button from "../common/Button";
import Tag from "../common/Tag";

const SearchLogoText = styled.div`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 26px;
	display: flex;
	justify-content: center;
	margin-left: 8px;
`;

const TagContainer = styled.div`
	width: 850px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const BtnWrapper = styled.div`
	margin-top: 30px;
	margin-bottom: 15px;
	width: auto;
	display: flex;
	justify-content: space-around;
`;

const Search = (props) => {
	return (
		<>
			<SearchLogoText>독서 모임 찾기</SearchLogoText>
			<SearchBar />
			<TagContainer>
				<Row gutter={32}>
					<Col span={6}>
						<Tag>소수정예</Tag>
					</Col>
					<Col span={6}>
						<Tag>온라인</Tag>
					</Col>
					<Col span={6}>
						<Tag>오프라인</Tag>
					</Col>
					<Col span={6}>
						<Tag>온・오프라인</Tag>
					</Col>
				</Row>
				<Row gutter={32}>
					<Col span={6}>
						<Tag>수도권</Tag>
					</Col>
					<Col span={6}>
						<Tag>지방</Tag>
					</Col>
					<Col span={6}>
						<Tag>친목</Tag>
					</Col>
					<Col span={6}>
						<Tag>독서 외 활동</Tag>
					</Col>
				</Row>
			</TagContainer>
		</>
	);
};

export default Search;
