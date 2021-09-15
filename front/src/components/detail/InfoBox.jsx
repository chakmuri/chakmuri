import React from "react";
import styled from "styled-components";
import { Skeleton, Modal, Row, message } from "antd";
import { customMedia } from "../../GlobalStyles";

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
						{props.club.startDate} ~ {props.club.endDate}
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
								if (props.userId) {
									props.handleLikedClubs(props.club.id);
								} else {
									message.warning("로그인이 필요한 기능입니다.");
								}
							}}
						>
							{props.likedClubs.includes(props.club.id) ? (
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
													message.warning("로그인이 필요한 기능입니다.");
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
	height: 332px;
	border: 1.5px solid #e5e5e5;
	border-radius: 10px;

	display: flex;

  ${customMedia.lessThan("mobile")`
    flex-direction: column;
    height: 372px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    flex-direction: column;
    height: 340px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    height: 203px;
  `}

	${customMedia.between("tablet", "desktop")`
    height: 293px;
  `}
`;

const ClubThumbnail = styled.div`
	width: 493px;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
    border-radius: 10px 0 0 10px;
    
    ${customMedia.lessThan("mobile")`
      border-radius: 10px 10px 0 0;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      border-radius: 10px 10px 0 0;
    `}
  }
  
  ${customMedia.lessThan("mobile")`
    width: 295px;
    height: 50%;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 363px;
    height: 50%;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 305px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 440px;
  `}
`;

const ClubInfo = styled.div`
	width: 50%;
	padding: 0 50px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	${customMedia.lessThan("mobile")`
    width: 100%;
    height: 50%;
    padding: 5px 17px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 100%;
    padding: 17px 25px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    padding: 10px 20px;
  `}
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
  
  ${customMedia.lessThan("mobile")`
    font-size: 16px;
    margin-bottom: 8px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 16px;
    margin-bottom: 8px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 24px;
  `}
`;

const SubTitle = styled.div`
	font-size: 22px;
	font-weight: 500;
	color: #f98404;

  ${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const Text = styled.div`
	font-size: 20px;

	${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const TagContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 15px;

	${customMedia.between("mobile", "largeMobile")`
    margin-top: 5px;
  `}
`;

const Tag = styled(SmallTag)`
	& {
		font-size: 16px;
		padding: 7px 25px;

    ${customMedia.lessThan("mobile")`
      font-size: 10px;
      padding: 5px 10px;
      margin-top: 0;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 10px;
      padding: 5px 10px;
      margin-top: 0;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 12px;
      padding: 7px 13px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 16px;
      padding: 7px 20px;
    `}
	}
`;

const BtnRow = styled.div`
	display: flex;
	gap: 30px;
	margin-top: 40px;

	${customMedia.lessThan("mobile")`
    gap: 10px;
    margin-top: 10px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    gap: 10px;
    margin-top: 10px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    gap: 20px;
    margin-top: 15px;
  `}
`;

const LikeIconContainer = styled.div`
	width: 50px;
	height: 50px;
	border: 2px solid #e5e5e5;
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	${customMedia.lessThan("mobile")`
    width: 40px;
    height: 40px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 30px;
    height: 30px;
    padding-bottom: 8px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 40px;
    height: 40px;
  `}
`;

const LikeIcon = styled.div`
	width: 32px;
	height: 30px;
	cursor: pointer;

  img{
    width: 100%;
    height: 100%;
  }

	${customMedia.lessThan("mobile")`
    width: 24px;
    height: 22px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 18px;
    height: 16px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 24px;
    height: 22px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 28px;
    height: 26px;
  `}
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

	${customMedia.lessThan("mobile")`
    width: 200px;
    height: 40px;
    font-size: 14px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 250px;
    height: 30px;
    font-size: 12px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 200px;
    height: 40px;
    font-size: 16px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 250px;
    height: 50px;
    font-size: 18px;
  `}
`;

const StyledModal = styled(Modal)`
	display: flex;
	justify-content: center;

	.ant-modal-content {
		padding: 30px 55px;
		display: flex;
		align-items: center;

		${customMedia.lessThan("mobile")`
      padding: 15px 25px;
    `}

		${customMedia.between("mobile", "tablet")`
      padding: 25px 50px;
    `}
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

	${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

	${customMedia.between("mobile", "tablet")`
    font-size: 18px;
  `}
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

		${customMedia.lessThan("mobile")`
      font-size: 14px;
    `}

		${customMedia.between("mobile", "tablet")`
      font-size: 18px;
    `}
	}
`;

const SkeletonImg = styled(Skeleton.Image)`
	.ant-skeleton-image {
		width: 493px;
    height: 332px;
    
    ${customMedia.lessThan("mobile")`
      width: 295px;
      height: 186px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      width: 363px;
      height: 170px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      width: 305px;
      height: 203px;
    `}

    ${customMedia.between("tablet", "desktop")`
      width: 440px;
      height: 293px;
    `}
  }
`;
