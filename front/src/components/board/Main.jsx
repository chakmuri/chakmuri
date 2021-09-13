import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Row, Col, Checkbox, Select, message } from "antd";
import { customMedia } from "../common/GlobalStyles";

import TagFilter from "./TagFilter";
import SearchBar from "./SearchBar";
import ClubCard from "./ClubCard";
import Pagination from "../common/Pagination";
import Spin from "../common/Spin";

const Main = () => {
	const [clubs, setClubs] = useState();
	const [sortBy, setSortBy] = useState("createdAt");
	const [clubStatus, setClubStatus] = useState("");
	const [selectedTags, setSelectedTags] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [likedClubs, setLikedClubs] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const userId = localStorage.getItem("user_id");

	// const history = useHistory();

	useEffect(() => {
		fetchData();
		setLoading(false);
	}, [clubStatus, page, keyword, selectedTags, sortBy, userId]);

	const fetchData = async () => {
		const sendTags = selectedTags.join(", ");

		try {
			const res = await axios.get("/clubs", {
				params: {
					sortBy: sortBy,
					tags: sendTags,
					clubStatus: clubStatus,
					keyword: keyword,
					page: page,
				},
			});

			setClubs(res.data.clubList);
			setTotal(res.data.totalCount);

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
		}
	};

	const handleLikeDelete = async (clubId) => {
		try {
			axios.delete("/likedClubs", {
				params: { userId: userId, clubId: Number(clubId) },
			});
		} catch (err) {
			console.log(err);
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
					<MainTitle onClick={() => document.location.reload()}>
						독서모임 찾기
					</MainTitle>
					<SearchBar keyword={keyword} setKeyword={setKeyword} />
					<TagFilter
						selectedTags={selectedTags}
						setSelectedTags={setSelectedTags}
					/>
					<TitleRow>
						<Title>{total}개의 독서모임</Title>
						<CheckboxFilter
							onChange={(e) => {
								setClubStatus(e.target.checked ? "ACTIVE" : "");
							}}
						>
							모집중
						</CheckboxFilter>
						<SortFilter
							showSearch
							placeholder="정렬필터"
							onChange={(value) => setSortBy(value)}
						>
							<Option value="createdAt">최신순</Option>
							<Option value="likes">좋아요순</Option>
						</SortFilter>
					</TitleRow>
					<CardRow>
						{clubs
							? clubs.map((club) => (
									<ClubCard
										key={club.id}
										userId={userId}
										club={club}
										likedClubs={likedClubs}
										handleLikedClubs={handleLikedClubs}
									/>
							  ))
							: ""}
					</CardRow>
					<PaginationRow>
						<Pagination
							total={total}
							pageSize={9}
							current={page}
							onChange={(page) => setPage(page)}
						/>
					</PaginationRow>
				</>
			)}
		</Wrapper>
	);
};

export default Main;

const { Option } = Select;

const Wrapper = styled.section`
	width: 1200px;
	margin: 90px auto;

  ${customMedia.lessThan("mobile")`
    width: 295px;
	  margin: 40px auto;

  `}

	${customMedia.between("mobile", "tablet")`
    width: 610px;
	  margin: 60px auto;

  `}

	${customMedia.between("tablet", "desktop")`
    width: 880px;
  `}
`;

const MainTitle = styled.div`
	font-size: 26px;
	font-weight: bold;
	text-align: center;
  cursor: pointer;
  
  ${customMedia.lessThan("mobile")`
   	font-size: 18px;
  `}

	${customMedia.between("mobile", "tablet")`
   	font-size: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 22px;
  `}


`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	margin: 50px 0;
`;

const Title = styled.div`
	font-weight: 500;
	font-size: 24px;
	flex: 5;

 ${customMedia.lessThan("mobile")`
   	font-size: 16px;
  `}

	${customMedia.between("mobile", "tablet")`
   	font-size: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 20px;
  `}
`;

const CheckboxFilter = styled(Checkbox)`
	font-size: 18px;
	flex: 0.7;

 ${customMedia.lessThan("mobile")`
    font-size: 12px;
    flex: 2;
  `}

	${customMedia.between("mobile", "tablet")`
    font-size: 14px;
    flex: 1;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 16px;
  `}

	.ant-checkbox-inner {
		width: 20px;
    height: 20px;
    
 ${customMedia.lessThan("mobile")`
   	width: 12px;
    height: 12px;
  `}

	${customMedia.between("mobile", "tablet")`
   	width: 14px;
    height: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
   	width: 16px;
    height: 16px;
  `}
	}

	.ant-checkbox-checked .ant-checkbox-inner {
		background-color: #fea82f;
		border-color: #fea82f;
	}

	.ant-checkbox-checked::after {
		border-color: #fea82f;
	}

	.ant-checkbox-wrapper:hover .ant-checkbox-inner,
	.ant-checkbox:hover .ant-checkbox-inner,
	.ant-checkbox-input:focus + .ant-checkbox-inner {
		border-color: #fea82f;
	}
`;

const SortFilter = styled(Select)`
	flex: 0.7;

	.ant-select-selection-item,
	.ant-select-selection-placeholder {
		font-size: 16px;

		${customMedia.lessThan("mobile")`
   	font-size: 12px;
  `}

		${customMedia.between("mobile", "tablet")`
   	font-size: 14px;
  `}
	}

	&:not(.ant-select-disabled):hover .ant-select-selector {
		border-color: #fea82f;
	}
`;

const CardRow = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 60px;

	${customMedia.between("mobile", "tablet")`
    gap: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
    gap: 20px;
  `}
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 90px;
	justify-content: center;
`;

const SpinContainer = styled.div`
	width: 100%;
	height: 80vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;
