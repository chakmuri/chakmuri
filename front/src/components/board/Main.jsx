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
	margin: 0 auto;
`;

const Title = styled.div`
	font-size: 26px;
	font-weight: bold;
	text-align: center;
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const Main = (props) => {
	const [clubs, setClubs] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("", { params: { page: page } });
				setClubs(res.data.clubList);
				setTotal(res.data.totalCount);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [page]);

	return (
		<Wrapper>
			<Title>독서모임 찾기</Title>
			<SearchBar />
			<TagFilter />
			<ClubList clubs={clubs} />
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
