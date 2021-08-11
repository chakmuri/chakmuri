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

	.title {
		font-family: Roboto;
		font-weight: bold;
		font-size: 24px;
		line-height: 28px;
		margin: 60px 0 40px 0;
	}

	.button {
		text-align: center;
		margin: 80px 0;
	}
`;

const Main = () => {
	return (
		<>
			<Wrapper>
				<ImageSlider />
				<div className="title">지금 가장 인기있는 모임</div>
				<PopularList />
				<div className="title">따끈따끈한 신규 모임</div>
				<NewList />
				<div className="button">
					<Button>독서모임 더보기</Button>
				</div>
				<FeedList />
				<div className="button">
					<Button>피드 더보기</Button>
				</div>
			</Wrapper>
		</>
	);
};

export default Main;
