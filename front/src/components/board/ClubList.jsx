import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Checkbox, Select } from "antd";
import ClubCard from "../common/ClubCard";

const { Option } = Select;

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	margin: 50px 0;
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 24px;
	flex: 5;
`;

const CheckboxFilter = styled(Checkbox)`
	font-family: Roboto;
	font-size: 18px;
	flex: 0.7;

	.ant-checkbox-inner {
		width: 20px;
		height: 20px;
	}

	.ant-checkbox-checked .ant-checkbox-inner {
		background-color: #fea82f;
		border-color: #fea82f;
	}

	.ant-checkbox-checked::after {
		border-color: #fea82f;
	}

	.ant-checkbox-wrapper:hover .ant-checkbox-inner,
	.ant-checkbox:hover .ant-checkbox-inner,
	.ant-checkbox-input:focus + .ant-checkbox-inner {
		border-color: #fea82f;
	}
`;

const SortFilter = styled(Select)`
	flex: 0.7;

	.ant-select-selection-item {
		font-size: 16px;
	}

	&:not(.ant-select-disabled):hover .ant-select-selector {
		border-color: #fea82f;
	}
`;

const ClubCardContainer = styled(Row)`
	margin-bottom: 90px;
`;

const ClubList = (props) => {
	console.log(props);
	return (
		<Wrapper>
			<TitleRow>
				<Title>{props.clubs.totalCount}개의 독서모임</Title>
				<CheckboxFilter>모집중</CheckboxFilter>
				<SortFilter showSearch placeholder="정렬필터">
					<Option value="new">최신순</Option>
					<Option value="like">좋아요순</Option>
				</SortFilter>
			</TitleRow>
			<ClubCardContainer gutter={[48, 24]}>
				{props.clubs.map((club) => (
					<Col key={club.id} span={8}>
						<Link to={`/clubs/${club.id}`}>
							<ClubCard club={club} />
						</Link>
					</Col>
				))}
			</ClubCardContainer>
		</Wrapper>
	);
};

export default ClubList;
