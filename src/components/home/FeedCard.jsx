import React from "react";
import styled from "styled-components";
import { Card, Divider } from "antd";

const { Meta } = Card;

const StyledCard = styled(Card)`
	width: 384px;
	height: 500px;
	border: 2px solid #e5e5e5;
	border-radius: 10px;

	.ant-card-meta-description {
		color: black;
		font-family: Roboto;
		font-size: 16px;
		line-height: 32px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}

	.writer {
		font-family: Roboto;
		font-size: 20px;
		line-height: 30px;
	}
`;

const FeedCard = () => {
	return (
		<StyledCard
			hoverable
			cover={
				<img
					src="assets/images/thumbnail-feed.png"
					alt="Feedcard thumbnail"
				></img>
			}
		>
			<Meta description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia." />
			<Divider style={{ backgroundColor: "#94989B" }} />
			<p className="writer">
				by <strong>독서모임 이름</strong>
			</p>
		</StyledCard>
	);
};

export default FeedCard;
