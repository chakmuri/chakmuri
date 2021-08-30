import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Row, message } from "antd";
import InfoBox from "./InfoBox";
import DetailInfo from "./DetailInfo";
import Comment from "./Comment";
import Button from "../common/Button";
import Pagination from "../common/Pagination";
import profile from "../../images/icons/profile.png";

const Wrapper = styled.div`
	width: 996px;
	margin: 60px auto;
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
	margin-top: 50px;
`;

const CmtContainer = styled.div`
	width: 100%;
`;

const InputBox = styled.div`
	width: 840px;
	border: 1px solid #c4c4c4;
	border-radius: 10px;
	margin: 0 auto;
	padding: 10px;

	display: flex;
`;

const ProfileIcon = styled.div`
	width: 48px;
	height: 48px;
	margin-right: 10px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const StyledInput = styled.input`
	border: none;
	outline: none;
	font-size: 20px;
	flex: 2;
`;

const CmtPost = styled(Button)`
	& {
		font-size: 16px;
		color: #ffffff;
		background-color: #ff6701;
		padding: 0;
		border-radius: 5px;
	}
	flex: 0.2;
`;

const ListRow = styled.div`
	width: 100%;
	margin: 20px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const Main = (props) => {
	const [club, setClub] = useState();
	const [comments, setComments] = useState();
	const [postComment, setPostComment] = useState("");
	const [updateComment, setUpdateComment] = useState("");
	const [editable, setEditable] = useState();
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [like, setLike] = useState();
	const clubId = Number(props.match.params.id);
	const userId = localStorage.getItem("user_id");
	const userImg = localStorage.getItem("user_image");

	console.log("clubId: ", clubId);
	console.log("Main props: ", props);

	useEffect(() => {
		console.log("api call check");
		const fetchData = async () => {
			try {
				const res = await axios.get(`/clubs/${clubId}`);

				console.log("res: ", res.data);

				setClub(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
		fetchCmtData();
	}, [userImg, total, page]);

	const fetchCmtData = async () => {
		const res = await axios.get(`/comments/clubs/${clubId}`, {
			params: { page: page },
		});

		setComments(res.data.commentList);
		setTotal(res.data.totalCount);
	};

	const handlePostComment = async () => {
		const data = {
			userId: userId,
			clubId: Number(clubId),
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
		} finally {
			fetchCmtData();
		}
	};

	const handleUpdateComment = async (id) => {
		const data = {
			clubId: clubId,
			userId: userId,
			contents: updateComment,
		};

		try {
			const res = await axios.put(`/comments/${id}`, data);

			if (res.status === 200) {
				message.success("댓글이 성공적으로 수정되었습니다.");
			} else {
				message.error("댓글 수정에 실패했습니다.");
			}
		} catch (err) {
			console.log(err);
		} finally {
			fetchCmtData();
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
		} finally {
			fetchCmtData();
		}
	};

	const handleLike = async () => {
		const data = {
			clubId: Number(clubId),
			userId: userId,
		};
		await axios.post("/likedClubs", data);
		setLike(data.clubId);
		if (like) {
			await axios.delete(`/likedClubs/${clubId}`);
			setLike();
		}
	};

	const onReset = () => {
		setPostComment("");
	};

	return (
		<Wrapper>
			<InfoBox club={club} like={like} handleLike={handleLike} />
			<DetailInfo club={club} />
			<TitleRow>
				<Title>댓글 ({total})</Title>
			</TitleRow>
			<CmtContainer>
				<InputBox>
					<ProfileIcon>
						{userImg ? (
							<img src={userImg} alt="User profile" />
						) : (
							<img src={profile} alt="User profile icon" />
						)}
					</ProfileIcon>
					<StyledInput
						value={postComment}
						placeholder="댓글을 입력하세요..."
						onChange={(e) => {
							setPostComment(e.target.value);
						}}
					/>
					<CmtPost
						onClick={() => {
							handlePostComment();
							onReset();
						}}
					>
						등록
					</CmtPost>
				</InputBox>
				<ListRow>
					{comments
						? comments.map((comment) => (
								<Comment
									key={comment.id}
									comment={comment}
									userId={userId}
									setUpdateComment={setUpdateComment}
									editable={editable}
									setEditable={setEditable}
									handleUpdateComment={handleUpdateComment}
									handleDeleteComment={handleDeleteComment}
								/>
						  ))
						: ""}
				</ListRow>
			</CmtContainer>
			<PaginationRow>
				<Pagination
					total={total}
					pageSize={5}
					current={page}
					onChange={(page) => setPage(page)}
				/>
			</PaginationRow>
		</Wrapper>
	);
};

export default Main;
