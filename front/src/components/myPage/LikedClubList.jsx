import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import ClubCard from "../home/ClubCard";
import CustomPagination from "../common/Pagination";

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const LikedClubList = () => {
	return (
		<>
			<Row gutter={24}>
				<Col span={6}>
					<ClubCard />
				</Col>
				<Col span={6}>
					<ClubCard />
				</Col>
				<Col span={6}>
					<ClubCard />
				</Col>
				<Col span={6}>
					<ClubCard />
				</Col>
			</Row>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default LikedClubList;
