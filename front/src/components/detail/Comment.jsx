import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const CmtContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ProfileIcon = styled.div`
	width: 48px;
	height: 48px;

	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
`;

const CmtBox = styled.div`
	width: 758px;
	background-color: #f6f6f6;
	border-radius: 10px;
	margin-left: 8px;
	padding: 20px;
	position: relative;
`;

const CmtWriter = styled.span`
	font-family: Roboto;
	font-weight: bold;
	font-size: 20px;
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
	cursor: pointer;
	position: absolute;
	right: 10%;
`;

const CmtDelete = styled.span`
	font-size: 14px;
	color: #ff0000;
	cursor: pointer;
	position: absolute;
	right: 5%;
`;

const CmtText = styled.div`
	font-family: Roboto;
	font-size: 14px;
	padding: 5px 0;
`;

const CmtInput = styled.input`
	width: 80%;
	font-family: Roboto;
	font-size: 14px;
	padding: 3px 5px;
	border: 1px solid black;
	border-radius: 2px;
	outline: none;
`;

const ConfirmBtn = styled(Button)`
	& {
		font-size: 14px;
		color: #ffffff;
		background-color: #ff6701;
		padding: 6px 10px;
		border-radius: 5px;
		margin-left: 15px;
	}
`;

const CancelBtn = styled(Button)`
	& {
		font-size: 14px;
		background-color: #ffffff;
		color: #ff6701;
		padding: 6px 10px;
		border: 1px solid #ff6701;
		border-radius: 5px;
		margin-left: 15px;
	}
`;

const Comment = (props) => {
	const createdAt = new Date(props.comment.createdAt).toLocaleString();
	const updatedAt = new Date(props.comment.updatedAt).toLocaleString();

	return (
		<CmtContainer>
			<ProfileIcon>
				<img src={props.comment.userImgUrl} alt="User profile" />
			</ProfileIcon>
			<CmtBox>
				<CmtWriter>{props.comment.userName}</CmtWriter>
				<CmtDate>{createdAt !== updatedAt ? updatedAt : createdAt}</CmtDate>
				<CmtUpdateCheck>
					{createdAt !== updatedAt ? "(수정됨)" : ""}
				</CmtUpdateCheck>
				{props.comment.userId === props.userId ? (
					<CmtUpdate onClick={() => props.setEditable(true)}>수정</CmtUpdate>
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
				<CmtText>
					{props.comment.userId === props.userId ? (
						<>
							<CmtInput
								value={props.comment.contents}
								onChange={(e) => props.setUpdateComment(e.target.value)}
							/>
							<ConfirmBtn
								onClick={() => {
									props.handleUpdateComment();
									props.setEditable(false);
								}}
							>
								확인
							</ConfirmBtn>
							<CancelBtn onClick={() => props.setEditable(false)}>
								취소
							</CancelBtn>
						</>
					) : (
						props.comment.contents
					)}
				</CmtText>
			</CmtBox>
		</CmtContainer>
	);
};

export default Comment;
