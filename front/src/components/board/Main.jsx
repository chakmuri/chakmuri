import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Row } from "antd";
import TagFilter from "./TagFilter";
import SearchBar from "./SearchBar";
import ClubList from "./ClubList";
import CustomPagination from "../common/Pagination";

const Wrapper = styled.div`
	width: 1200px;
	margin: 60px auto;
`;

const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const Main = () => {
	const [clubs, setClubs] = useState([]);
	const [sortBy, setSortBy] = useState("createdAt");
	const [clubStatus, setClubStatus] = useState("");
	const [selectedTags, setSelectedTags] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);

	const sendTags = selectedTags.join(", ");
	console.log("sendTags: ", sendTags);

	useEffect(() => {
		const fetchData = async () => {
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

				console.log("res: ", res);

				setClubs(res.data.clubList);
				setTotal(res.data.totalCount);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [sortBy, clubStatus, sendTags, keyword, total, page]);

	console.log("clubs: ", clubs);
	return (
		<Wrapper>
			<Title>독서모임 찾기</Title>
			<SearchBar setKeyword={setKeyword} />
			<TagFilter
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
			/>
			<ClubList
				clubs={clubs}
				setSortBy={setSortBy}
				setClubStatus={setClubStatus}
			/>
			<PaginationRow>
				<CustomPagination
					total={total}
					pageSize={9}
					current={page}
					onChange={(page) => setPage(page)}
				/>
			</PaginationRow>
		</Wrapper>
	);
};

export default Main;
