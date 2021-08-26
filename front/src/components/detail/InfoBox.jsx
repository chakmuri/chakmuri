import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import SmallTag from "../common/SmallTag";

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
	margin-top: 40px;
`;

const Tag = styled(SmallTag)`
	& {
		font-size: 16px;
		padding: 7px 25px;
	}
`;

const LikeIcon = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 20px;
	right: 20px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const InfoBox = () => {
	return (
		<InfoBoxContainer>
			<ClubThumbnail>
				<img src="assets/images/thumbnail-club.png" alt="Club Thumbnail" />
			</ClubThumbnail>
			<ClubInfo>
				<Title>독서모임 이름</Title>
				<InfoRow>
					<SubTitle>참여 인원</SubTitle> <Text>2인 ~ 6인</Text>
				</InfoRow>
				<InfoRow>
					<SubTitle>진행 기간</SubTitle>{" "}
					<Text>2021. 09. 01 - 2021. 10. 30</Text>
				</InfoRow>
				<TagContainer>
					<Tag>태그</Tag>
					<Tag>태그</Tag>
					<Tag>태그</Tag>
				</TagContainer>
				<LikeIcon>
					<img
						src="assets/images/icons/unfilled_heart.png"
						alt="Unfilled like icon"
					/>
				</LikeIcon>
			</ClubInfo>
		</InfoBoxContainer>
	);
};

export default InfoBox;
