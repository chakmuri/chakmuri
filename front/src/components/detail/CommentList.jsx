import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import Comment from "./Comment";
import Pagination from "../common/Pagination";
import Button from "../common/Button";

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin-bottom: 15px;
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 24px;
`;

const CmtContainer = styled.div`
	margin: 150px 0 60px 0;
`;

const InputBox = styled.div`
	margin: 40px 78px 40px 78px;
	text-align: left;
	border: 1px solid #c4c4c4;
	border-radius: 10px;

	img {
		margin: 11px 14px 11px 11px;
	}

	input {
		width: 700px;
		border: none;
		outline: none;
	}
`;

const StyledInput = styled.input`
	font-size: 20px;
`;

const CmtPost = styled(Button)`
	& {
		font-size: 16px;
		color: #f98404;
		padding: 0;
	}
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const CommentList = () => {
	return (
		<CmtContainer>
			<TitleRow>
				<Title>댓글 (N)</Title>
			</TitleRow>
			<InputBox>
				<img src="assets/images/icons/profile.png" alt="profile" />
				<StyledInput placeholder="댓글을 입력하세요..." />
				<CmtPost>등록</CmtPost>
			</InputBox>
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<PaginationRow>
				<Pagination />
			</PaginationRow>
		</CmtContainer>
	);
};

export default CommentList;
