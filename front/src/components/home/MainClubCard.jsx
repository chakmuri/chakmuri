import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Skeleton } from "antd";
import styled from "styled-components";

import SmallTag from "../common/SmallTag";
import ExpiredTag from "../common/ExpiredTag";
import unfilledHeart from "../../images/icons/unfilled_heart.png";
import filledHeart from "../../images/icons/filled_heart.png";

const MainClubCard = ({ ...props }) => {
	let history = useHistory();
	return (
		<StyledCard
			hoverable
			cover={
				props.club.imgUrl ? (
					<img src={props.club.imgUrl} alt="Clubcard thumbnail" />
				) : (
					<Skeleton.Image />
				)
			}
			onClick={() => history.push(`/detail/${props.club.id}`)}
		>
			<Meta title={props.club.title} description={props.club.contents} />
			{props.club.clubStatus === "EXPIRED" ? (
				<ClubExpiredTag>마감</ClubExpiredTag>
			) : (
				""
			)}
			<TagContainer>
				{props.club.tags.split(", ").map((tag, i) => (
					<MainTag key={i}>{tag}</MainTag>
				))}
			</TagContainer>
			<LikeIcon
				onClick={(e) => {
					e.stopPropagation();
					props.handleLikedClubs(props.club.id);
				}}
			>
				{props.likedClubs.includes(props.club.id) ? (
					<img src={filledHeart} alt="Filled like icon" />
				) : (
					<img src={unfilledHeart} alt="Unfilled like icon" />
				)}
				<LikeNum>{props.club.likes}</LikeNum>
			</LikeIcon>
		</StyledCard>
	);
};

export default MainClubCard;

const { Meta } = Card;

const StyledCard = styled(Card)`
	width: 282px;
	height: 320px;
	border: 2px solid #e5e5e5;
	border-radius: 10px;

	.ant-card-cover img {
		height: 160px;
	}

	.ant-card-body {
		height: 160px;
		padding: 20px;
		position: relative;
	}

	.ant-card-meta-title {
		font-family: Roboto;
		font-weight: bold;
		font-size: 20px;
	}

	.ant-card-meta-description {
		font-family: Roboto;
		font-size: 14px;
		color: black;
	}

	position: relative;
`;

const TagContainer = styled.div`
	display: flex;
	gap: 5px;

	position: absolute;
	bottom: 20px;
`;

const MainTag = styled(SmallTag)`
	& {
		font-size: 12px;
		padding: 5px 10px;
	}
`;

const LikeIcon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	position: absolute;
	right: 10px;
	bottom: 20px;
`;

const ClubExpiredTag = styled(ExpiredTag)`
	& {
		font-size: 14px;
		padding: 3px;

		position: absolute;
		top: 8%;
		right: 5%;
	}
`;

const LikeNum = styled.span``;
