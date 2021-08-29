import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "antd";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Button from "../common/Button";
import MainClubCard from "./MainClubCard";
import { useEffect } from "react";

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;
	margin: 60px 0 40px 0;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: center;
`;

const MainButton = styled(Button)`
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
	const [sortByCreatedAtClubs, setSortByCreatedAtClubs] = useState([]);
	const [sortByLikesClubs, setsortByLikesClubs] = useState([]);
	const [like, setLike] = useState(false);
	const userId = localStorage.getItem("user_id");

	useEffect(() => {
		const fetchData = async () => {
			const createdAtRes = await axios.get("/clubs", {
				params: {
					sortBy: "createdAt",
					tags: "",
					clubStatus: "",
					keyword: "",
					page: 1,
				},
			});
			setSortByCreatedAtClubs(createdAtRes.data.clubList);

			const likesRes = await axios.get("/clubs", {
				params: {
					sortBy: "likes",
					tags: "",
					clubStatus: "",
					keyword: "",
					page: 1,
				},
			});
			setsortByLikesClubs(likesRes.data.clubList);
		};
		fetchData();
	}, []);

	const handleLike = async (id) => {
		const data = {
			clubId: id,
			userId: userId,
		};
		await axios.post("/likedClubs", data);
		setLike(!like);

		if (like === false) await axios.delete(`/likedClubs/${data.clubId}`);
	};

	return (
		<Wrapper>
			<ImageSlider />
			<Title>지금 가장 인기있는 모임</Title>
			<Row>
				{sortByLikesClubs
					.filter((club, i) => i < 4)
					.map((club) => (
						<Col key={club.id} span={6}>
							<Link to={`/detail/${club.id}`}>
								<MainClubCard club={club} like={like} onClick={handleLike} />
							</Link>
						</Col>
					))}
			</Row>
			<Title>따끈따끈한 신규 모임</Title>
			<Row>
				{sortByCreatedAtClubs
					.filter((club, i) => i < 4)
					.map((club) => (
						<Col key={club.id} span={6}>
							<Link to={`/detail/${club.id}`}>
								<MainClubCard club={club} like={like} handleLike={handleLike} />
							</Link>
						</Col>
					))}
			</Row>
			<ButtonRow>
				<Link to="/board">
					<MainButton>독서모임 더보기</MainButton>
				</Link>
			</ButtonRow>
		</Wrapper>
	);
};

export default Main;
