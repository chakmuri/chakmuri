import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col, message } from "antd";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Button from "../common/Button";
import MainClubCard from "./MainClubCard";
import Spin from "../common/Spin";

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

const SpinContainer = styled.div`
	width: 100%;
	height: 80vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Main = () => {
	const [sortByCreatedAtClubs, setSortByCreatedAtClubs] = useState([]);
	const [sortByLikesClubs, setsortByLikesClubs] = useState([]);
	const [likedClubs, setLikedClubs] = useState([]);
	const [loading, setLoading] = useState(true);
	const userId = localStorage.getItem("user_id");

	useEffect(() => {
		fetchData();
		setLoading(false);
	}, []);

	const fetchData = async () => {
		try {
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
		} catch (err) {
			console.log(err);
		}
	};

	const handleLikedClubs = (clubId) => {
		let index = likedClubs.indexOf(clubId);

		if (likedClubs.includes(clubId)) {
			likedClubs.splice(index, 1);
			setLikedClubs([...likedClubs]);
			handleLikeDelete(clubId);
		} else {
			setLikedClubs([...likedClubs, clubId]);
			handleLikePost(clubId);
		}
	};

	const handleLikePost = async (clubId) => {
		try {
			await axios.post("/likedClubs", {
				clubId: Number(clubId),
				userId: userId,
			});
		} catch (err) {
			message.error("이미 좋아요한 독서모임입니다.");
		} finally {
			fetchData();
		}
	};

	const handleLikeDelete = async (clubId) => {
		try {
			axios.delete("/likedClubs", {
				params: { userId: userId, clubId: Number(clubId) },
			});
		} catch (err) {
			console.log(err);
		} finally {
			fetchData();
		}
	};

	return (
		<Wrapper>
			{loading ? (
				<SpinContainer>
					<Spin />
				</SpinContainer>
			) : (
				<>
					<ImageSlider />
					<Title>지금 가장 인기있는 모임</Title>
					<Row gutter={24}>
						{sortByLikesClubs
							.filter((club, i) => i < 4)
							.map((club) => (
								<Col key={club.id}>
									<MainClubCard
										club={club}
										handleLikedClubs={handleLikedClubs}
										likedClubs={likedClubs}
									/>
								</Col>
							))}
					</Row>
					<Title>따끈따끈한 신규 모임</Title>
					<Row gutter={24}>
						{sortByCreatedAtClubs
							.filter((club, i) => i < 4)
							.map((club) => (
								<Col key={club.id}>
									<MainClubCard
										club={club}
										handleLikedClubs={handleLikedClubs}
										likedClubs={likedClubs}
									/>
								</Col>
							))}
					</Row>
					<ButtonRow>
						<Link to="/board">
							<MainButton>독서모임 더보기</MainButton>
						</Link>
					</ButtonRow>
				</>
			)}
		</Wrapper>
	);
};

export default Main;
