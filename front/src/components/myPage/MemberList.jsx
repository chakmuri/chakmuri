import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import Member from "./Member";
import CustomPagination from "../common/Pagination";

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const MemberList = () => {
	return (
		<>
			<Row gutter={[0, 16]}>
				<Member />
				<Member />
				<Member />
			</Row>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default MemberList;
