import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import DetailInfo from "./DetailInfo";
import CommentList from "./CommentList";

const Wrapper = styled.div`
	width: 996px;
	margin: 50px auto;
`;

const Main = (props) => {
	console.log("props: ", props);
	const [club, setClub] = useState({});
	const clubId = props.match.params.id;
	console.log("clubId: ", clubId);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`club/${clubId}`);
				console.log("res: ", res);
				setClub(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [clubId]);

	return (
		<Wrapper>
			<InfoBox club={club} />
			<DetailInfo club={club} />
			<CommentList club={club} />
		</Wrapper>
	);
};

export default Main;
