import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import Comment from "./Comment";
import CustomPagination from "../common/Pagination";

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const CommentList = () => {
	return (
		<>
			<Row gutter={[0, 16]}>
				<Comment />
				<Comment />
				<Comment />
			</Row>
			<PaginationRow>
				<CustomPagination />
			</PaginationRow>
		</>
	);
};

export default CommentList;
