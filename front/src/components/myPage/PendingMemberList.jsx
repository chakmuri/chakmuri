import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import PendingMember from "./PendingMember";
import CustomPagination from "../common/Pagination";

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const PendingMemberList = () => {
	return (
		<>
			<Row gutter={[0, 16]}>
				<PendingMember />
			</Row>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default PendingMemberList;
