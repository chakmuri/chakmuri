import React from "react";
import styled from "styled-components";

const CmtContainer = styled.div`
	width: 816px;
	margin: 0px 102px 30px 78px;
	display: flex;
	text-align: left;

	img {
		width: 50px;
		height: 50px;
	}
`;

const CmtBox = styled.div`
	width: 758px;
	display: inline-block;
	border-radius: 10px;
	margin-left: 8px;
	background: #f6f6f6;
	font-family: Roboto;
	padding: 20px 25px 25px 25px;
`;

const CmtWriter = styled.span`
	font-weight: bold;
	font-size: 20px;
	line-height: 23px;
	margin-right: 5px;
`;

const CmtDate = styled.span`
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #959595;
`;

const CmtUpdateCheck = styled.span`
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #fea82f;
	margin-left: 5px;
`;

const CmtUpdate = styled.span`
	font-size: 14px;
	color: #959595;

	margin-left: 350px;
	cursor: pointer;
`;

const CmtDelete = styled.span`
	font-size: 14px;
	color: #ff0000;

	margin-left: 20px;
	cursor: pointer;
`;

const CmtText = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: -0.015em;
	margin: 10px 0px 0px 0px;
`;

const Comment = (props) => {
	return (
		<CmtContainer>
			<img src={props.comment.userImgUrl} alt="User profile" />
			<CmtBox>
				<CmtWriter>{props.comment.userName}</CmtWriter>
				<CmtDate>
					{props.comment.updatedAt
						? props.comment.updatedAt
						: props.comment.createdAt}
				</CmtDate>
				<CmtUpdateCheck>
					{props.comment.updatedAt ? "(수정됨)" : ""}
				</CmtUpdateCheck>
				{props.comment.userId === props.userId ? (
					<CmtUpdate
						onClick={() => props.handleUpdateComment(props.comment.id)}
					>
						수정
					</CmtUpdate>
				) : (
					""
				)}
				{props.comment.userId === props.userId ? (
					<CmtDelete
						onClick={() => props.handleDeleteComment(props.comment.id)}
					>
						삭제
					</CmtDelete>
				) : (
					""
				)}
				<CmtText>{props.comment.contents}</CmtText>
			</CmtBox>
		</CmtContainer>
	);
};

export default Comment;
