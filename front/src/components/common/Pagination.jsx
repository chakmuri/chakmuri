import React from "react";
import { Pagination } from "antd";
import styled from "styled-components";

const StyledPagination = styled(Pagination)`
	.ant-pagination-item:focus-visible,
	.ant-pagination-item:hover {
		border-color: #ff6701;
	}

	.ant-pagination-item:focus-visible a,
	.ant-pagination-item:hover a {
		color: #ff6701;
	}
`;

const CustomPagination = () => {
	return <StyledPagination />;
};

export default CustomPagination;