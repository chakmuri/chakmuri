import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col, message } from "antd";
import styled from "styled-components";
import { customMedia } from "../common/GlobalStyles";

import ImageSlider from "./ImageSlider";
import MainClubCard from "./MainClubCard";
import Button from "../common/Button";
import Spin from "../common/Spin";

const Main = () => {
	const [sortByCreatedAtClubs, setSortByCreatedAtClubs] = useState([]);
	const [sortByLikesClubs, setsortByLikesClubs] = useState([]);
	const [likedClubs, setLikedClubs] = useState([]);
	const [loading, setLoading] = useState(true);
	const userId = localStorage.getItem("user_id");

	useEffect(() => {
		fetchData();
		setLoading(false);
	}, [userId]);

	const fetchData = async () => {
		try {
			const createdAtRes = await axios.get("/clubs", {
				params: {
					sortBy: "createdAt",
					tags: "",
					clubStatus: "ACTIVE",
					keyword: "",
					page: 1,
				},
			});
			setSortByCreatedAtClubs(createdAtRes.data.clubList);

			const likesRes = await axios.get("/clubs", {
				params: {
					sortBy: "likes",
					tags: "",
					clubStatus: "ACTIVE",
					keyword: "",
					page: 1,
				},
			});
			setsortByLikesClubs(likesRes.data.clubList);

			if (userId) {
				const likedClubRes = await axios.get("/likedClubs/ids", {
					params: {
						userId: userId,
					},
				});
				setLikedClubs(likedClubRes.data.likedClubIdList);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleLikedClubs = (clubId) => {
		let index = likedClubs.indexOf(clubId);

		try {
			if (likedClubs.includes(clubId)) {
				likedClubs.splice(index, 1);
				setLikedClubs([...likedClubs]);
				handleLikeDelete(clubId);
			} else {
				setLikedClubs([...likedClubs, clubId]);
				handleLikePost(clubId);
			}
		} catch (err) {
			console.log(err);
		} finally {
			fetchData();
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
					<CardRow>
						{sortByLikesClubs
							.filter((club, i) => i < 4)
							.map((club) => (
								<MainClubCard
									key={club.id}
									userId={userId}
									club={club}
									handleLikedClubs={handleLikedClubs}
									likedClubs={likedClubs}
								></MainClubCard>
							))}
					</CardRow>
					<Title>따끈따끈한 신규 모임</Title>
					<CardRow>
						{sortByCreatedAtClubs
							.filter((club, i) => i < 4)
							.map((club) => (
								<MainClubCard
									key={club.id}
									userId={userId}
									club={club}
									handleLikedClubs={handleLikedClubs}
									likedClubs={likedClubs}
								></MainClubCard>
							))}
					</CardRow>
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

const Wrapper = styled.section`
	width: 1200px;
  margin: 0 auto;
  
  ${customMedia.lessThan("mobile")`
    width: 295px;
  `}

	${customMedia.between("mobile", "tablet")`
    width: 610px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 880px;
  `}

`;

const Title = styled.div`
	font-weight: bold;
	font-size: 24px;
  margin: 60px 0 40px 0;

  ${customMedia.lessThan("mobile")`
    font-size: 20px;
  `}

	${customMedia.between("mobile", "tablet")`
    font-size: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 20px;
    margin: 50px 0 30px 0;
  `}
`;

const CardRow = styled.div`
	width: 100%;
	display: flex;
  gap: 24px;
  
  ${customMedia.lessThan("mobile")`
    flex-wrap: wrap;
    gap: 24px;
  `}

  ${customMedia.between("mobile", "tablet")`
    flex-wrap: wrap;
    gap: 40px;
  `}

  ${customMedia.between("tablet", "desktop")`
    flex-wrap: wrap;
    gap: 10px;
  `}
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
  
  ${customMedia.lessThan("mobile")`
    font-size: 16px;
  `}

	${customMedia.between("mobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 16px;
    margin: 60px 0;
  `}

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
