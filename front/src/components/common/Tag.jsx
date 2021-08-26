import React from "react";
import styled from "styled-components";

const Tag = styled.div`
	font-size: 16px;
	color: #f98404;
	background-color: #ffffff;
	border: 1px solid #f98404;
	border-radius: 30px;
	padding: 10px 20px;
	text-align: center;
	letter-spacing: 2px;
	cursor: pointer;

	&:hover {
		color: #ffffff;
		background-color: #f98404;
	}
`;

export default Tag;
