import React from "react";
import styled from "styled-components";
import { Card, Tag } from "antd";
import SmallTag from "./SmallTag";

const { Meta } = Card;

const StyledCard = styled(Card)`
	width: 340px;
	height: 350px;
	border: 2px solid #e5e5e5;
	border-radius: 10px;

	.ant-card-body {
		height: 160px;
		padding-bottom: 0;
	}

	.ant-card-meta-title {
		font-family: Roboto;
		font-weight: bold;
		font-size: 22px;
		line-height: 36px;
	}

	.ant-card-meta-description {
		font-family: Roboto;
		font-size: 16px;
		line-height: 36px;
		color: black;
	}
`;

const CardBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 0;
`;

const TagContainer = styled.div`
	display: flex;
	gap: 5px;
`;

const LikeIcon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LikeNum = styled.span``;

const ClubCard = ({ ...props }) => {
	return (
		<StyledCard
			hoverable
			cover={
				<img src="assets/images/thumbnail-club.png" alt="Clubcard thumbnail" />
			}
		>
			<Meta title={props.club.title} description={props.club.contents} />
			<CardBox>
				<TagContainer>
					{props.club.tags.map((tag) => (
						<SmallTag>{tag}</SmallTag>
					))}
				</TagContainer>
				<LikeIcon>
					{props.like ? (
						<img
							src="assets/images/icons/filled_heart.png"
							alt="Filled like icon"
						></img>
					) : (
						<img
							src="assets/images/icons/unfilled_heart.png"
							alt="Unfilled like icon"
						/>
					)}
					<LikeNum>{props.club.likes}</LikeNum>
				</LikeIcon>
			</CardBox>
		</StyledCard>
	);
};

export default ClubCard;
