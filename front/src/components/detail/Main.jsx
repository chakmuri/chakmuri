import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Row, message } from "antd";
import InfoBox from "./InfoBox";
import DetailInfo from "./DetailInfo";
import Comment from "./Comment";
import Button from "../common/Button";
import Pagination from "../common/Pagination";

const Wrapper = styled.div`
	width: 996px;
	margin: 50px auto;
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin-bottom: 15px;
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 24px;
`;

const CmtContainer = styled.div`
	margin: 150px 0 60px 0;
`;

const InputBox = styled.div`
	margin: 40px 78px 40px 78px;
	text-align: left;
	border: 1px solid #c4c4c4;
	border-radius: 10px;

	img {
		margin: 11px 14px 11px 11px;
	}

	input {
		width: 700px;
		border: none;
		outline: none;
	}
`;

const StyledInput = styled.input`
	font-size: 20px;
`;

const CmtPost = styled(Button)`
	& {
		font-size: 16px;
		color: #f98404;
		padding: 0;
	}
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const Main = (props) => {
	console.log("props: ", props);
	const [club, setClub] = useState({});
	const [comments, setComments] = useState([]);
	const [postComment, setPostComment] = useState("");
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [like, setLike] = useState(false);
	const clubId = props.match.params.id;
	const userId = localStorage.getItem("user_id");
	const userImg = localStorage.getItem("user_image");
	console.log("clubId: ", clubId);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`club/${clubId}`);
				console.log("res: ", res);

				setClub(res.data);

				const commentRes = await axios.get(`/comments/clubs/${clubId}`, {
					params: { page: page },
				});

				setComments(commentRes.data.commentList);
				setTotal(commentRes.data.totalCount);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [clubId, page]);

	const handlePostComment = async () => {
		const data = {
			clubId: clubId,
			userId: userId,
			contents: postComment,
		};

		try {
			const res = await axios.post("/comments", data);

			if (res.status === 200) {
				message.success("댓글이 성공적으로 등록되었습니다.");
			} else {
				message.error("댓글 등록에 실패했습니다.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdateComment = async (id) => {
		const data = {
			clubId: clubId,
			userId: userId,
			contents: postComment,
		};

		try {
			const res = await axios.patch(`/comments/${id}`, data);

			if (res.status === 200) {
				message.success("댓글이 성공적으로 수정되었습니다.");
			} else {
				message.error("댓글 수정에 실패했습니다.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteComment = async (id) => {
		try {
			const res = await axios.delete(`/comments/${id}`);

			if (res.status === 200) {
				message.success("댓글이 성공적으로 삭제되었습니다.");
			} else {
				message.error("댓글 삭제에 실패했습니다.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleLike = async (id) => {
		const data = {
			clubId: id,
			userId: userId,
		};
		await axios.post("/likedClubs", data);
		setLike(!like);

		if (like === false) await axios.delete(`likedClubs/${data.clubId}`);
	};

	return (
		<Wrapper>
			<InfoBox club={club} handleLike={handleLike} />
			<DetailInfo club={club} />
			<CmtContainer>
				<TitleRow>
					<Title>댓글 ({comments.totalCount})</Title>
				</TitleRow>
				<InputBox>
					{userImg ? (
						<img src={userImg} alt="User profile" />
					) : (
						<img
							src="assets/images/icons/profile.png"
							alt="User profile icon"
						/>
					)}
					<StyledInput
						placeholder="댓글을 입력하세요..."
						onChange={(e) => {
							setPostComment(e.target.value);
						}}
					/>
					<CmtPost onClick={handlePostComment}>등록</CmtPost>
				</InputBox>
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						comment={comment}
						userId={userId}
						handleUpdateComment={handleUpdateComment}
						handleDeleteComment={handleDeleteComment}
					/>
				))}
				<PaginationRow>
					<Pagination
						total={total}
						pageSize={9}
						current={page}
						onChange={(page) => setPage(page)}
					/>
				</PaginationRow>
			</CmtContainer>
		</Wrapper>
	);
};

export default Main;
