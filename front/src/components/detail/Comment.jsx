import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import Button from "../common/Button";
import { customMedia } from "../../GlobalStyles";

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
					<CmtUpdate onClick={() => props.setEditable(props.comment.id)}>
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
				<CmtText>
					{props.editable === props.comment.id ? (
						<>
							<CmtInput
								defaultValue={props.comment.contents}
								onChange={(e) => {
									console.log(e.target.value);
									props.setUpdateComment(e.target.value);
								}}
							/>
							<ConfirmBtn
								onClick={() => {
									props.handleUpdateComment(props.comment.id);
									props.setEditable();
								}}
							>
								확인
							</ConfirmBtn>
							<CancelBtn onClick={() => props.setEditable()}>취소</CancelBtn>
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

const CmtContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ProfileIcon = styled.div`
	width: 48px;
	height: 48px;

	${customMedia.lessThan("mobile")`
    width: 28px;
    height: 28px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 28px;
    height: 28px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    width: 32px;
    height: 32px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 40px;
    height: 40px;
  `}

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
  
  ${customMedia.lessThan("mobile")`
    width: 213px;
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 261px;
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    width: 446px;
  `}

  ${customMedia.between("tablet", "desktop")`
    width: 642px;
  `}
`;

const CmtWriter = styled.span`
	font-weight: bold;
	font-size: 22px;
	margin-right: 5px;

  ${customMedia.lessThan("mobile")`
    font-size: 16px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 16px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 18px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 20px;
  `}
`;

const CmtDate = styled.span`
	font-weight: 500;
	font-size: 16px;
	color: #959595;

  ${customMedia.lessThan("mobile")`
    font-size: 12px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const CmtUpdateCheck = styled.span`
	font-weight: 500;
	font-size: 16px;
	color: #fea82f;
	margin-left: 5px;

	${customMedia.lessThan("mobile")`
    font-size: 10px;
    margin-left: 0;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
    margin-left: 0;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const CmtUpdate = styled.span`
	font-size: 16px;
	color: #959595;
	cursor: pointer;
	position: absolute;
	right: 10%;

  ${customMedia.lessThan("mobile")`
    font-size: 10px;
    right: 17%;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
    right: 17%;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
    right: 11%;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const CmtDelete = styled.span`
	font-size: 16px;
	color: #ff0000;
	cursor: pointer;
	position: absolute;
	right: 5%;

  ${customMedia.lessThan("mobile")`
    font-size: 10px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const CmtText = styled.div`
	font-size: 16px;
  padding: 5px 0;
  
  ${customMedia.lessThan("mobile")`
    font-size: 12px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const CmtInput = styled(Input)`
	width: 80%;
	font-size: 16px;
	padding: 3px 5px;
	border: 1px solid black;
	border-radius: 2px;
	outline: none;

${customMedia.lessThan("mobile")`
    font-size: 10px;
    width: 100%;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
    width: 100%;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const ConfirmBtn = styled(Button)`
	& {
		font-size: 16px;
		color: #ffffff;
		background-color: #ff6701;
		padding: 6px 10px;
		border-radius: 5px;
		margin-left: 15px;

		${customMedia.lessThan("mobile")`
      font-size: 10px;
      padding: 3px 5px;
      margin-left: 0;
      margin-right: 15px;
      position: absolute;
      left: 30%;
      bottom: 5%;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 10px;
      padding: 3px 5px;
      margin-left: 0;
      margin-right: 15px;
      position: absolute;
      left: 30%;
      bottom: 5%;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 12px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 14px;
    `}
	}
`;

const CancelBtn = styled(Button)`
	& {
		font-size: 16px;
		background-color: #ffffff;
		color: #ff6701;
		padding: 6px 10px;
		border: 1px solid #ff6701;
		border-radius: 5px;
		margin-left: 15px;

    ${customMedia.lessThan("mobile")`
      font-size: 10px;
      padding: 3px 5px;
      margin-left: 0;
      position: absolute;
      right: 30%;
      bottom: 5%;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 10px;
      padding: 3px 5px;
      margin-left: 0;
      position: absolute;
      right: 30%;
      bottom: 5%;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 12px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 14px;
    `}
  }
`;
