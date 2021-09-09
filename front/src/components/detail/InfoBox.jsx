import React from "react";
import styled from "styled-components";
import { Skeleton } from "antd";

import SmallTag from "../common/SmallTag";
import unfilledHeart from "../../images/icons/unfilled_heart.png";
import filledHeart from "../../images/icons/filled_heart.png";

const InfoBox = ({ ...props }) => {
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
				<LikeIcon
					onClick={() => {
						props.like
							? props.handleDeleteLike(props.club.id)
							: props.handleLike(props.club.id);
					}}
				>
					{props.like === props.club.id ? (
						<img src={filledHeart} alt="Filled like icon"></img>
					) : (
						<img src={unfilledHeart} alt="Unfilled like icon" />
					)}
				</LikeIcon>
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
	position: relative;

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
	padding: 50px;
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

	margin-top: 40px;
`;

const Tag = styled(SmallTag)`
	& {
		font-size: 16px;
		padding: 7px 25px;
	}
`;

const LikeIcon = styled.div`
	width: 28px;
	height: 28px;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;

	img {
		width: 100%;
	}
`;

const SkeletonImg = styled(Skeleton.Image)`
	.ant-skeleton-image {
		width: 493px;
		height: 320px;
	}
`;
