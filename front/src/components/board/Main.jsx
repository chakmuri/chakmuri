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
	font-size: 26px;
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
	const [sortBy, setSortBy] = useState("");
	const [isChecked, setIsChecked] = useState();
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("/clubs", {
					params: { sortby: sortBy, tags: "", clubStatus: isChecked },
				});

				console.log("res: ", res);

				setClubs(res.data);
				setTotal(res.data.totalCount);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [sortBy, isChecked, total, page]);

	return (
		<Wrapper>
			<Title>독서모임 찾기</Title>
			<SearchBar />
			<TagFilter />
			<ClubList
				clubs={clubs}
				setSortBy={setSortBy}
				setIsChecked={setIsChecked}
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
