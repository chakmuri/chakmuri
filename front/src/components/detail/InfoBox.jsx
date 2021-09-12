import React from "react";
import styled from "styled-components";
import { Skeleton, Modal, Row, message } from "antd";

import SmallTag from "../common/SmallTag";
import Button from "../common/Button";
import unfilledHeart from "../../images/icons/unfilled_heart.png";
import filledHeart from "../../images/icons/filled_heart.png";

const InfoBox = (props) => {
	const tags = props.club.tags.split(", ");

	return (
		<InfoBoxContainer>
			<ClubThumbnail>
				{props.club.imgUrl ? (
					<img src={props.club.imgUrl} alt="Club Thumbnail" />
				) : (
					<SkeletonImg />
				)}
			</ClubThumbnail>
			<ClubInfo>
				<Title>{props.club.title}</Title>
				<InfoRow>
					<SubTitle>참여 인원</SubTitle>{" "}
					<Text>
						{props.club.minPersonnel}인 ~ {props.club.maxPersonnel}인
					</Text>
				</InfoRow>
				<InfoRow>
					<SubTitle>진행 기간</SubTitle>{" "}
					<Text>
						{props.club.startDate} - {props.club.endDate}
					</Text>
				</InfoRow>
				<TagContainer>
					{tags.map((tag, i) => (
						<Tag key={i}>{tag}</Tag>
					))}
				</TagContainer>
				<BtnRow>
					<LikeIconContainer>
						<LikeIcon
							onClick={() => {
								props.like
									? props.handleDeleteLike(props.club.id)
									: props.handlePostLike(props.club.id);
							}}
						>
							{props.like === props.club.id ? (
								<img src={filledHeart} alt="Filled like icon"></img>
							) : (
								<img src={unfilledHeart} alt="Unfilled like icon" />
							)}
						</LikeIcon>
					</LikeIconContainer>
					{(() => {
						if (props.club.clubStatus !== "EXPIRED") {
							if (props.userId && props.apply.includes(props.club.id))
								return (
									<>
										<ApplyBtn
											onClick={() => {
												props.handleDeleteApply(props.club.id);
												props.showModal();
											}}
										>
											참여취소
										</ApplyBtn>
										<StyledModal
											visible={props.isModalVisible}
											onCancel={() => props.handleCancel()}
										>
											<ModalTitle>참여신청이 완료되었습니다.</ModalTitle>
											<ButtonRow>
												<FilledBtn onClick={() => props.handleCancel()}>
													확인
												</FilledBtn>
											</ButtonRow>
										</StyledModal>
									</>
								);
							else
								return (
									<>
										<ApplyBtn
											onClick={() => {
												if (props.userId) {
													props.handlePostApply(props.club.id);
													props.showModal();
												} else {
													message.error("로그인이 필요한 기능입니다.");
												}
											}}
										>
											참여신청
										</ApplyBtn>
										<StyledModal
											visible={props.isModalVisible}
											onCancel={() => props.handleCancel()}
										>
											<ModalTitle>참여신청이 취소되었습니다.</ModalTitle>
											<ButtonRow>
												<FilledBtn onClick={() => props.handleCancel()}>
													확인
												</FilledBtn>
											</ButtonRow>
										</StyledModal>
									</>
								);
						} else return <ApplyBtn disabled>모집마감</ApplyBtn>;
					})()}
				</BtnRow>
			</ClubInfo>
		</InfoBoxContainer>
	);
};

export default InfoBox;

const InfoBoxContainer = styled.div`
	width: 100%;
	height: 320px;
	border: 1.5px solid #e5e5e5;
	border-radius: 10px;

	display: flex;
`;

const ClubThumbnail = styled.div`
	width: 493px;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		border-radius: 10px 0 0 10px;
	}
`;

const ClubInfo = styled.div`
	width: 50%;
	padding: 0 50px;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const InfoRow = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const Title = styled.div`
	font-size: 28px;
	font-weight: bold;
	margin-bottom: 16px;
`;

const SubTitle = styled.div`
	font-size: 22px;
	font-weight: 500;
	color: #f98404;
`;

const Text = styled.div`
	font-size: 20px;
`;

const TagContainer = styled.div`
	display: flex;
	gap: 10px;

	margin-top: 15px;
`;

const Tag = styled(SmallTag)`
	& {
		font-size: 16px;
		padding: 7px 25px;
	}
`;

const BtnRow = styled.div`
	display: flex;
	gap: 30px;
	margin-top: 40px;
`;

const LikeIconContainer = styled.div`
	width: 50px;
	height: 50px;
	border: 2px solid #e5e5e5;
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const LikeIcon = styled.div`
	width: 32px;
	height: 32px;
	cursor: pointer;

	img {
		width: 100%;
	}
`;

const ApplyBtn = styled(Button)`
	width: 300px;
	height: 50px;
	color: #ffffff;
	background-color: #ff6701;
	border-radius: 5px;
	padding: 0;
	text-align: center;

	&:disabled {
		opacity: 60%;
		cursor: not-allowed;
	}
`;

const StyledModal = styled(Modal)`
	display: flex;
	justify-content: center;

	.ant-modal-content {
		padding: 30px 55px;
		display: flex;
		align-items: center;
	}

	.ant-modal-body {
		text-align: center;
	}

	.ant-modal-footer {
		display: none;
	}
`;

const ModalTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const ButtonRow = styled(Row)`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	gap: 50px;
`;

const FilledBtn = styled(Button)`
	& {
		color: #ffffff;
		background-color: #ff6701;
		border: none;
		border-radius: 6px;
		outline: none;
		cursor: pointer;
	}
`;

const SkeletonImg = styled(Skeleton.Image)`
	.ant-skeleton-image {
		width: 493px;
		height: 320px;
	}
`;
