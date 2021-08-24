import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import Tags from "../common/Tags";

/**
 * 독서 모임 카드 공용 컴포넌트
 *
 *  독서모임 이름
 *
 *  한 줄 소개글
 *
 *  태그와 좋아요
 */

const { Meta } = Card;

const GatherCardContainer = styled.article`
	width: 346px;
	height: 350px;
	border: solid 1px #e5e5e5;
	border-radius: 0px 0px 10px 10px;
`;

const GatherCardText = styled(Card)`

	.ant-card-meta-title {	/* 독서모임 이름 */
		font-family: Roboto;
		font-weight: bold;
		font-size: 20px;
		line-height: 36px;
	}

	.ant-card-meta-description {	/* 한 줄 소개 */
		font-family: Roboto;
		font-size: 16px;
		line-height: 36px;
		color: black;
		margin-bottom: 15px;
	}
`;

const GatherCardBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const GatherCardTag = styled.div`
/*  */
`;

const GatherCardLike = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`


const GatherCards = (props) => {
	return (
		<GatherCardContainer>
			<GatherCardText
				cover={<img src="assets/images/gatherCardThumbnail.png" alt="images" />}
			>
				<Meta title="독서 모임 이름" description="한 줄 소개" />
				<GatherCardBottom>
					<GatherCardTag>
						<Tags />
						<Tags />
					</GatherCardTag>
					<GatherCardLike>
						<img src="assets/images/like.png" alt="icon" />9,999
					</GatherCardLike>
				</GatherCardBottom>
			</GatherCardText>
		</GatherCardContainer>
	);
};

export default GatherCards;
