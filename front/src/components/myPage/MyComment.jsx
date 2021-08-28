import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CommentBar = styled.div`
	width: 1200px;
	height: 80px;
	border: 1.5px solid #c4c4c4;
	border-radius: 5px;

	display: flex;
	align-items: center;
`;

const CommentProfileIcon = styled.div`
	width: 48px;
	height: 48px;
	margin-left: 65px;
`;

const CommentText = styled.div`
	font-family: Roboto;
	font-size: 20px;
	flex: 1;
	margin-left: 25px;
`;

const CommentBtn = styled.button`
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	background-color: #ff6701;
	border: none;
	border-radius: 6px;
	padding: 10px 20px;
	margin-right: 55px;
	cursor: pointer;
`;

const MyComment = ({ ...props }) => {
	return (
		<CommentBar>
			<CommentProfileIcon>
				<img src={props.myComment.userImgUrl} alt="Profile icon" />
			</CommentProfileIcon>
			<CommentText>{props.myComment.contents}</CommentText>
			<Link to={`/detail/${props.myComment.clubId}`}>
				<CommentBtn>보기</CommentBtn>
			</Link>
		</CommentBar>
	);
};

export default MyComment;
