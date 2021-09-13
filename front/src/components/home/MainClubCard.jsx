import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Skeleton, message } from "antd";
import styled from "styled-components";
import { customMedia } from "../common/GlobalStyles";

import SmallTag from "../common/SmallTag";
import unfilledHeart from "../../images/icons/unfilled_heart.png";
import filledHeart from "../../images/icons/filled_heart.png";

const MainClubCard = ({ ...props }) => {
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
			onClick={() => history.push(`/detail/${props.club.id}`)}
		>
			<Meta title={props.club.title} description={props.club.contents} />
			<TagContainer>
				{props.club.tags.split(", ").map((tag, i) => (
					<MainTag key={i}>{tag}</MainTag>
				))}
			</TagContainer>
			<LikeIcon
				onClick={(e) => {
					e.stopPropagation();
					if (props.userId) {
						props.handleLikedClubs(props.club.id);
					} else {
						message.warning("로그인이 필요한 기능입니다.");
					}
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
  
  ${customMedia.lessThan("mobile")`
    width: 295px;
    height: 333px;
  `}

	${customMedia.between("mobile", "largeMobile")`
    width: 363px;
    height: 401px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 285px;
    height: 323px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 212.5px;
    height: 250.5px;
  `}


	.ant-card-cover img {
    height: 160px;
    
  ${customMedia.lessThan("mobile")`
    height: 166.5px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    height: 200.5px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    height: 161.5px;
  `}

	${customMedia.between("tablet", "desktop")`
    height: 125.25px;
  `}
	}

	.ant-card-body {
		height: 160px;
		padding: 20px;
    position: relative;
    
  ${customMedia.lessThan("mobile")`
    height: 166.5px;
		padding: 20px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    height: 200.5px;
    padding: 30px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    height: 161.5px;
		padding: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
    height: 125.25px;
		padding: 15px;
  `}
	}

	.ant-card-meta-title {
		font-weight: bold;
    font-size: 20px;
    
  ${customMedia.lessThan("mobile")`
    font-size: 18px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 20px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 16px;
  `}
	}

	.ant-card-meta-description {
		font-size: 14px;
    color: black;
    
  ${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

   ${customMedia.between("mobile", "largeMobile")`
    font-size: 16px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 12px;
  `}
	}

	position: relative;
`;

const TagContainer = styled.div`
	display: flex;
	gap: 5px;

	position: absolute;
  bottom: 20px;
  
  ${customMedia.lessThan("mobile")`
   bottom: 20px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
   bottom: 25px;
  `}

	${customMedia.between("largeMobile", "tablet")`
   bottom: 20px;

  `}

	${customMedia.between("tablet", "desktop")`
    bottom: 15px;

  `}
`;

const MainTag = styled(SmallTag)`
	& {
		font-size: 12px;
    padding: 5px 10px;
    
  ${customMedia.lessThan("mobile")`
    font-size: 12px;
    padding: 5px 10px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 14px;
    padding: 5px 13px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
    padding: 5px 10px;

  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 10px;
    padding: 3px 6px;

  `}
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

	img {
		width: 24px;
    height: 22px;
    
  ${customMedia.lessThan("mobile")`
    width: 20px;
    height: 18px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 22px;
    height: 20px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 20px;
    height: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 16px;
    height: 14px;
  `}
  }
  
  ${customMedia.lessThan("mobile")`
    bottom: 20px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    bottom: 25px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    bottom: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
    bottom: 10px;
  `}

`;

const LikeNum = styled.span`
  font-size: 14px; 

  ${customMedia.lessThan("mobile")`
    font-size: 12px; 
  `}

   ${customMedia.between("mobile", "largeMobile")`
    font-size: 14px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 12px; 
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 12px; 
  `}


`;

const SkeletonImg = styled(Skeleton.Image)`
	.ant-skeleton-image {
		width: 282px;
    height: 160px;
    
  ${customMedia.lessThan("mobile")`
    width: 412px;
    height: 206px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 363px;
    height: 200.5px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 285px;
    height: 161.5px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 212.5px;
    height: 125.25px;
  `}
	}
`;
