import React from "react";
import { Row } from "antd";
import styled from "styled-components";

import Member from "./Member";
import Pagination from "../common/Pagination";

const MemberList = () => {
	return (
		<>
			<Row gutter={[0, 16]}>
				<Member />
				<Member />
				<Member />
			</Row>
			<PaginationRow>
				<Pagination />
			</PaginationRow>
		</>
	);
};

export default MemberList;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;
