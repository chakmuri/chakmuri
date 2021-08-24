import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import GatherCard from "../common/GatherCards";
import CustomPagination from "../common/Pagination";

const ListRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const LikedClubList = () => {
	return (
		<>
			<ListRow>
				<GatherCard />
				<GatherCard />
				<GatherCard />
			</ListRow>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default LikedClubList;
