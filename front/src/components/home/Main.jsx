import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import PopularList from "./PopularClubList";
import NewList from "./NewClubList";
import Button from "../common/Button";
import FeedList from "./FeedList";

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;

	.button {
		text-align: center;
		margin: 80px 0;
	}
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;
	margin: 60px 0 40px 0;
`;

const MainButton = styled.div`
	text-align: center;
	margin: 80px 0;
	border-radius: 30px;
	color: #ff6701;
	background-color: #ffffff;
	border: 1px solid #ff6701;
	padding: 10px 20px;
	transition: all 0.3s;

	&:hover {
		color: #ffffff;
		background-color: #ff6701;
	}
`;

const Main = () => {
	return (
		<Wrapper>
			<ImageSlider />
			<Title>지금 가장 인기있는 모임</Title>
			<PopularList />
			<Title>따끈따끈한 신규 모임</Title>
			<NewList />
			<MainButton>
				<Button>독서모임 더보기</Button>
			</MainButton>
			<FeedList />
			<MainButton>
				<Button>피드 더보기</Button>
			</MainButton>
		</Wrapper>
	);
};

export default Main;
