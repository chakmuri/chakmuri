import React from "react";
import styled from "styled-components";
import { Card, Tag } from "antd";

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

	.box {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 0;

		.like {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.tag {
		margin-right: 10px;
	}
`;

const StyledTag = styled(Tag)`
	font-family: Roboto;
	font-weight: bold;
	font-size: 12px;
	color: #ffffff;
	padding: 3px 15px;
	border-radius: 30px;
`;

const MainClubCard = () => {
	return (
		<StyledCard
			hoverable
			cover={
				<img src="assets/images/thumbnail-club.png" alt="Clubcard thumbnail" />
			}
		>
			<Meta title="독서모임 이름" description="한 줄 소개" />
			<div className="box">
				<div className="tags">
					<StyledTag color="#fea82f">태그</StyledTag>
					<StyledTag color="#fea82f">태그</StyledTag>
				</div>
				<div className="like">
					<img
						className="button-like"
						src="assets/images/icons/heart.png"
						alt="Unfilled Heart"
					/>
					<span>9,999</span>
				</div>
			</div>
		</StyledCard>
	);
};

export default MainClubCard;
