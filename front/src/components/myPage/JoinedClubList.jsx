import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import ClubCard from "../common/ClubCard";
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

const JoinedClubList = () => {
	return (
		<>
			<ListRow>
				<ClubCard />
				<ClubCard />
				<ClubCard />
			</ListRow>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default JoinedClubList;
