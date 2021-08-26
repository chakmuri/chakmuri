import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import MyComment from "./MyComment";
import CustomPagination from "../common/Pagination";

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const MyCommentList = () => {
	return (
		<>
			<Row gutter={[0, 16]}>
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
				<MyComment />
			</Row>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default MyCommentList;
