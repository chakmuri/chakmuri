import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Tag from "../common/Tag";

const TagContainer = styled.div`
	width: 850px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const Search = (props) => {
	return (
		<>
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
