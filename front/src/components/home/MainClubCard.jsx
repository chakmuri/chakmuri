import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import SmallTag from "../common/SmallTag";

const { Meta } = Card;

const StyledCard = styled(Card)`
	width: 282px;
	height: 320px;
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

const MainClubCard = () => {
	return (
		<StyledCard
			hoverable
			cover={
				<img src="assets/images/thumbnail-club.png" alt="Clubcard thumbnail" />
			}
		>
			<Meta title="독서모임 이름" description="한 줄 소개" />
			<CardBox>
				<TagContainer>
					<SmallTag>태그</SmallTag>
					<SmallTag>태그</SmallTag>
				</TagContainer>
				<LikeIcon>
					<img
						src="assets/images/icons/unfilled_heart.png"
						alt="Unfilled like icon"
					/>
					<LikeNum>9,999</LikeNum>
				</LikeIcon>
			</CardBox>
		</StyledCard>
	);
};

export default MainClubCard;
