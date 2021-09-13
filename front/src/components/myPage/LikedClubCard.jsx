import React from "react";
import { useHistory } from "react-router-dom";
import { Card, message, Skeleton } from "antd";
import styled from "styled-components";
import { customMedia } from "../common/GlobalStyles";

import SmallTag from "../common/SmallTag";
import ExpiredTag from "../common/ExpiredTag";
import unfilledHeart from "../../images/icons/unfilled_heart.png";
import filledHeart from "../../images/icons/filled_heart.png";

const LikedClubCard = ({ ...props }) => {
	const history = useHistory();

	return (
		<StyledCard
			hoverable
			cover={
				props.club.imgUrl ? (
					<img src={props.club.imgUrl} alt="Clubcard thumbnail" />
				) : (
					<SkeletonImg />
				)
			}
			onClick={() => history.push(`/detail/${props.club.clubId}`)}
		>
			<Meta title={props.club.title} description={props.club.contents} />
			{props.club.clubStatus === "EXPIRED" ? (
				<ClubExpiredTag>마감</ClubExpiredTag>
			) : (
				""
			)}
			<TagContainer>
				{props.club.tags.split(", ").map((tag, i) => (
					<ClubTag key={i}>{tag}</ClubTag>
				))}
			</TagContainer>
			<LikeIcon
				onClick={(e) => {
					e.stopPropagation();
					if (props.userId) {
						props.handleLikeDelete(props.club.clubId);
					} else {
						message.warning("로그인이 필요한 기능입니다.");
					}
				}}
			>
				{props.like === props.club.clubId ? (
					<img src={filledHeart} alt="Filled like icon"></img>
				) : (
					<img src={unfilledHeart} alt="Unfilled like icon" />
				)}
				<LikeNum>{props.club.likes}</LikeNum>
			</LikeIcon>
		</StyledCard>
	);
};

export default LikedClubCard;

const { Meta } = Card;

const StyledCard = styled(Card)`
	width: 360px;
	height: 385px;
	border: 2px solid #e5e5e5;
  border-radius: 10px;
  
  ${customMedia.lessThan("mobile")`
   	width: 295px;
	  height: 320px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 363px;
    height: 388px;
  `}

	${customMedia.between("largeMobile", "tablet")`
   	width: 295px;
	  height: 320px;
  `}

	${customMedia.between("tablet", "desktop")`
   	width: 280px;
	  height: 305px;
  `}

	.ant-card-cover img {
    height: 192.5px;

    ${customMedia.lessThan("mobile")`
	  height: 160px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    height: 194px;
  `}

	${customMedia.between("largeMobile", "tablet")`
	  height: 160px;
  `}

	${customMedia.between("tablet", "desktop")`
	  height: 152.5px;
  `}
	}

	.ant-card-body {
		height: 190px;
		padding: 20px;
    position: relative;
    
     ${customMedia.lessThan("mobile")`
	  height: 160px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    height: 194px;
		padding: 20px;
  `}

	${customMedia.between("largeMobile", "tablet")`
	  height: 160px;
  `}

	${customMedia.between("tablet", "desktop")`
    height: 152.5px;
		padding: 15px;
  `}
	}

	.ant-card-meta-title {
		font-weight: bold;
    font-size: 22px;
    
    ${customMedia.lessThan("mobile")`
	  font-size: 20px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 22px;
  `}

	${customMedia.between("largeMobile", "tablet")`
	 font-size: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
	 font-size: 18px;
  `}
	}

	.ant-card-meta-description {
		font-size: 16px;
    color: black;
    
    ${customMedia.lessThan("mobile")`
	  font-size: 16px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 18px;
  `}

	${customMedia.between("largeMobile", "tablet")`
	  font-size: 16px;
  `}

	${customMedia.between("tablet", "desktop")`
	  font-size: 14px;
  `}
	}
`;

const TagContainer = styled.div`
	display: flex;
	gap: 5px;

	position: absolute;
  bottom: 25px;
  
  ${customMedia.lessThan("mobile")`
	  bottom: 15px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
   bottom: 20px;
	  gap: 5px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    bottom: 15px;
	  gap: 3px;
  `}

	${customMedia.between("tablet", "desktop")`
    bottom: 15px;
	  gap: 3px;
  `}
`;

const ClubTag = styled(SmallTag)`
	& {
		font-size: 14px;
    padding: 7px 13px;
    
    ${customMedia.lessThan("mobile")`
    font-size: 12px;
    padding: 5px 10px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
   font-size: 14px;
    padding: 5px 12px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
    padding: 5px 10px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 10px;
    padding: 5px 10px;
    
  `}
	}
`;

const LikeIcon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	position: absolute;
	right: 20px;
  bottom: 25px;
  
  ${customMedia.lessThan("mobile")`
    bottom: 15px;  
  `}

  ${customMedia.between("mobile", "largeMobile")`
    bottom: 20px;
  `}

	${customMedia.between("largeMobile", "tablet")`
	  bottom: 15px;
  `}

	${customMedia.between("tablet", "desktop")`
	  bottom: 15px;
  `}

  img {
		width: 24px;
    height: 22px;

  ${customMedia.lessThan("mobile")`
	  width: 22px;
    height: 20px;
  `}

   ${customMedia.between("mobile", "largeMobile")`
    width: 24px;
    height: 22px;
  `}

	${customMedia.between("largeMobile", "tablet")`
	  width: 20px;
    height: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
	  width: 20px;
    height: 18px;
  `}
	}
`;

const LikeNum = styled.span`
  ${customMedia.lessThan("mobile")`
	  font-size: 14px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 16px;
`}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 12px;
  `}
`;

const ClubExpiredTag = styled(ExpiredTag)`
	& {
		font-size: 16px;
		padding: 5px;
		position: absolute;
		top: 5%;
		right: 3%;
	}
`;

const SkeletonImg = styled(Skeleton.Image)`
	.ant-skeleton-image {
		width: 360px;
    height: 192.5px;
    
    ${customMedia.lessThan("mobile")`
    width: 195px;
    height: 160px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 363px;
    height: 194px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    width: 295px;
	  height: 160px;
  `}

  ${customMedia.between("tablet", "desktop")`
    width: 280px;
	  height: 152.5px;
  `}
	}
`;
