import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Row, Divider, message, Modal } from "antd";
import styled from "styled-components";
import { customMedia } from "../../GlobalStyles";

import MyComment from "./MyComment";
import EditForm from "./EditForm";
import LikedClubCard from "./LikedClubCard";
import JoinedClubCard from "./JoinedClubCard";
import Member from "./Member";
import PendingMember from "./PendingMember";
import Pagination from "../common/Pagination";
import Button from "../common/Button";
import NotFound from "../common/NotFound";
import Spin from "../common/Spin";
import { useHistory } from "react-router-dom";

const Main = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [myClub, setMyClub] = useState();
	const [likedClubs, setLikedClubs] = useState([]);
	const [myLikedClubs, setMyLikedClubs] = useState([]);
	const [myJoinedClubs, setMyJoinedClubs] = useState([]);
	const [myComments, setMyComments] = useState(null);
	const [myPendingMembers, setMyPendingMembers] = useState();
	const [myPendingMembersTotal, setMyPendingMembersTotal] = useState(0);
	const [myPendingMembersPage, setMyPendingMembersPage] = useState(1);
	const [myMembers, setMyMembers] = useState();
	const [myMembersTotal, setMyMembersTotal] = useState(0);
	const [myMembersPage, setMyMembersPage] = useState(1);
	const [myCommentsTotal, setMyCommentsTotal] = useState(0);
	const [myCommentsPage, setMyCommentsPage] = useState(1);
	const [myLikedClubsTotal, setMyLikedClubsTotal] = useState(0);
	const [myLikedClubsPage, setMyLikedClubsPage] = useState(1);
	const [myJoinedClubsTotal, setMyJoinedClubsTotal] = useState(0);
	const [myJoinedClubsPage, setMyJoinedClubsPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const userId = localStorage.getItem("user_id");

	const history = useHistory();

	useEffect(() => {
		fetchData();
	}, [
		myMembersPage,
		myPendingMembersPage,
		myJoinedClubsPage,
		myLikedClubsTotal,
		myLikedClubsPage,
		myCommentsPage,
	]);

	const fetchData = async () => {
		try {
			const res = await axios.get(`/comments/users/${userId}`, {
				params: { page: myCommentsPage },
			});

			setMyComments(res.data.commentList);
			setMyCommentsTotal(res.data.totalCount);

			const likedClubsRes = await axios.get(`/likedClubs/users/${userId}`, {
				params: { page: myLikedClubsPage },
			});
			setMyLikedClubs(likedClubsRes.data.likedClubList);
			setMyLikedClubsTotal(likedClubsRes.data.totalCount);

			const joinedClubsRes = await axios.get(`/members/users/${userId}`, {
				params: {
					page: myJoinedClubsPage,
				},
			});

			setMyJoinedClubs(joinedClubsRes.data.joiningClubList);
			setMyJoinedClubsTotal(joinedClubsRes.data.totalCount);

			const myClubRes = await axios.get(`/clubs/users/${userId}`);

			if (myClubRes.data) {
				const pendingMembersRes = await axios.get("/members", {
					params: {
						userId: userId,
						approvalStatus: "WAITING",
						page: myPendingMembersPage,
					},
				});

				setMyPendingMembers(pendingMembersRes.data.memberList);
				setMyPendingMembersTotal(pendingMembersRes.data.totalCount);

				const memberRes = await axios.get("/members", {
					params: {
						userId: userId,
						approvalStatus: "CONFIRMED",
						page: myMembersPage,
					},
				});

				setMyMembers(memberRes.data.memberList);
				setMyMembersTotal(memberRes.data.totalCount);
			}

			setMyClub(myClubRes.data);

			const likedClubRes = await axios.get("/likedClubs/ids", {
				params: {
					userId: userId,
				},
			});
			setLikedClubs(likedClubRes.data.likedClubIdList);

			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleDeleteClub = async () => {
		try {
			const res = await axios.get(`/clubs/users/${userId}`);

			if (res.data) {
				const deleteRes = await axios.delete(`/clubs/users/${userId}`);

				if (deleteRes.status === 200) {
					message.success("독서모임이 성공적으로 삭제되었습니다.");
					handleCancel();
					history.go(0);
				} else {
					message.error("독서모임 삭제에 실패하였습니다.");
				}
			} else {
				message.error("현재 운영중인 독서모임이 존재하지 않습니다.");
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

	const handleMemberApproval = async (memberId) => {
		try {
			const res = axios.put("/members", { memberId: memberId });
			if (res.status === 200) {
				message.success("독서모임 참여가 승인되었습니다.");
			}
		} catch (err) {
			console.log(err);
		} finally {
			fetchData();
		}
	};

	const handleMemberReject = async (userId, clubId) => {
		try {
			const res = axios.delete("/members", {
				params: {
					userId: userId,
					clubId: clubId,
					delete: "NO",
				},
			});
			if (res.status === 200) {
				message.warning("독서모임 참여가 거절되었습니다.");
			}
		} catch (err) {
			console.log(err);
		} finally {
			fetchData();
		}
	};

	const handleMemberDelete = async (userId, clubId) => {
		try {
			const res = axios.delete("/members", {
				params: {
					userId: userId,
					clubId: Number(clubId),
					delete: "OUT",
				},
			});

			if (res.status === 200) {
				message.warning("독서모임에서 내보내기 처리되었습니다.");
			}
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
					<StyledTabs defaultActiveKey="1">
						<TabPane tab="내 댓글" key="1">
							{myCommentsTotal !== 0 ? (
								<TabContainer gutter={[0, 102]}>
									<Row gutter={[0, 16]}>
										{myComments.map((comment) => (
											<Row key={comment.id}>
												<MyComment myComment={comment} />
											</Row>
										))}
									</Row>
									<PaginationRow>
										<Pagination
											total={myCommentsTotal}
											pageSize={10}
											current={myCommentsPage}
											onChange={(page) => setMyCommentsPage(page)}
										/>
									</PaginationRow>
								</TabContainer>
							) : (
								<NotFound>🚫 내 댓글이 존재하지 않습니다.🚫</NotFound>
							)}
						</TabPane>
						<TabPane tab="좋아요한 독서모임" key="2">
							{myLikedClubsTotal !== 0 ? (
								<TabContainer>
									<CardRow>
										{myLikedClubs.map((likedClub) => (
											<LikedClubCard
												key={likedClub.id}
												userId={userId}
												club={likedClub}
												handleLikeDelete={handleLikeDelete}
												like={likedClub.clubId}
											/>
										))}
									</CardRow>
									<PaginationRow>
										<Pagination
											total={myLikedClubsTotal}
											pageSize={9}
											current={myLikedClubsPage}
											onChange={(page) => setMyLikedClubsPage(page)}
										/>
									</PaginationRow>
								</TabContainer>
							) : (
								<NotFound>🚫 좋아요한 독서모임이 존재하지 않습니다🚫</NotFound>
							)}
						</TabPane>
						<TabPane tab="참여중인 독서모임" key="3">
							{myJoinedClubsTotal !== 0 ? (
								<TabContainer>
									<CardRow>
										{myJoinedClubs.map((joinedClub) => (
											<JoinedClubCard
												key={joinedClub.id}
												userId={userId}
												club={joinedClub}
												likedClubs={likedClubs}
												handleLikedClubs={handleLikedClubs}
											/>
										))}
									</CardRow>
									<PaginationRow>
										<Pagination
											total={myJoinedClubsTotal}
											pageSize={9}
											current={myJoinedClubsPage}
											onChange={(page) => setMyJoinedClubsPage(page)}
										/>
									</PaginationRow>
								</TabContainer>
							) : (
								<NotFound>🚫 참여중인 독서모임이 존재하지 않습니다🚫</NotFound>
							)}
						</TabPane>
						<TabPane tab="독서모임 관리" key="4">
							{myClub ? (
								<TabContainer gutter={[0, 100]}>
									<Box>
										<MidTitle>참여자 관리</MidTitle>
										<Text>승인 대기자</Text>
										{myPendingMembers.length !== 0 ? (
											<>
												<Row gutter={[0, 16]}>
													{myPendingMembers.map((member) => (
														<Row key={member.id}>
															<PendingMember
																myPendingMember={member}
																handleMemberReject={handleMemberReject}
																handleMemberApproval={handleMemberApproval}
															/>
														</Row>
													))}
												</Row>
												<PaginationRow>
													<Pagination
														total={myPendingMembersTotal}
														pageSize={3}
														current={myPendingMembersPage}
														onChange={(page) => setMyPendingMembersPage(page)}
													/>
												</PaginationRow>
											</>
										) : (
											<MemberNotFound>
												🚫 현재 대기중인 멤버가 없습니다.🚫
											</MemberNotFound>
										)}
										<Divider />
										<Text>참여자 목록</Text>
										{myMembers.length !== 0 ? (
											<>
												<Row gutter={[0, 16]}>
													{myMembers.map((member) => (
														<Row key={member.id}>
															<Member
																myMember={member}
																handleMemberDelete={handleMemberDelete}
															/>
														</Row>
													))}
												</Row>
												<PaginationRow>
													<Pagination
														total={myMembersTotal}
														pageSize={3}
														current={myMembersPage}
														onChange={(page) => setMyMembersPage(page)}
													/>
												</PaginationRow>
											</>
										) : (
											<MemberNotFound>
												🚫 현재 참여중인 멤버가 없습니다.🚫
											</MemberNotFound>
										)}
									</Box>
									<Box>
										<MidTitle>정보 수정</MidTitle>
										<EditForm myClub={myClub} />
										<Divider />
										<DeleteBtnContainer>
											<TextBox>
												<LargeText>독서모임 삭제하기</LargeText>
												<Text>
													한 번 독서모임을 삭제하면 복구할 수 없습니다. 신중하게
													결정해주세요!
												</Text>
											</TextBox>
											<DeleteBtn onClick={showModal}>독서모임 삭제</DeleteBtn>
											<StyledModal
												visible={isModalVisible}
												onCancel={handleCancel}
											>
												<ModalTitle>
													정말로 독서모임을 삭제하시겠습니까?
												</ModalTitle>
												<Text>
													한 번 삭제하시면 다시 되돌릴 수 없습니다. <br />{" "}
													신중하게 선택하신 다음 확인 버튼을 눌러주세요.
												</Text>
												<ButtonRow>
													<FilledBtn onClick={handleDeleteClub}>확인</FilledBtn>
													<UnfilledBtn type="button" onClick={handleCancel}>
														취소
													</UnfilledBtn>
												</ButtonRow>
											</StyledModal>
										</DeleteBtnContainer>
									</Box>
								</TabContainer>
							) : (
								<NotFound>
									🚫 현재 운영중인 독서모임이 존재하지 않습니다 🚫
								</NotFound>
							)}
						</TabPane>
					</StyledTabs>
				</>
			)}
		</Wrapper>
	);
};

export default Main;

const { TabPane } = Tabs;

const Wrapper = styled.div`
	width: 1200px;
  margin: 0 auto;
  flex: 1;

	${customMedia.lessThan("mobile")`
    width: 295px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 363px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 610px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 880px;
  `}
`;

const TabContainer = styled(Row)`
  width: 100%;
  margin-top: 70px;
  padding-bottom: 60px;

	${customMedia.lessThan("mobile")`
    margin-top: 40px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    margin-top: 40px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    margin-top: 40px;
  `}
`;

const StyledTabs = styled(Tabs)`

	.ant-tabs-tab-btn {
    font-size: 22px;
    
    ${customMedia.lessThan("mobile")`
      font-size: 14px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 16px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 16px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 18px;
    `}
	}

	.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
		color: #fa9423;
    font-weight: bold;

    ${customMedia.lessThan("mobile")`
      font-weight: 500;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-weight: 500;
    `}
    
    ${customMedia.between("largeMobile", "tablet")`
      font-weight: 500;
    `}
	}

	.ant-tabs-tab:hover {
		color: #fa9423;
	}

	.ant-tabs-ink-bar {
		border: 2px solid #fa9423;
		background-color: #fa9423;
	}
`;

const CardRow = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 60px;

	${customMedia.between("largeMobile", "tablet")`
    gap: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
    gap: 20px;
  `}
`;

const MidTitle = styled.div`
	width: 100%;
	font-size: 20px;
	margin-bottom: 10px;

  ${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
  font-size: 14px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 16px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const LargeText = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 15px;

  ${customMedia.lessThan("mobile")`
    font-size: 12px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 12px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const Text = styled.div`
	font-size: 16px;
  margin-bottom: 15px;
  
  ${customMedia.lessThan("mobile")`
    font-size: 10px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const TextBox = styled.div`
	flex: 1;
`;

const Box = styled.div`
	width: 100%;
`;

const DeleteBtnContainer = styled.div`
	width: 100%;
	border: 1px solid #c4c4c4;
	border-radius: 5px;
	padding: 25px;
	display: flex;

	${customMedia.lessThan("mobile")`
    font-size: 10px;
    padding: 15px;
    flex-direction: column;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
    padding: 15px;
    flex-direction: column;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}
  
  ${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const DeleteBtn = styled(Button)`
	width: 140px;
	font-size: 18px;
	font-weight: bold;
	color: #ffffff;
	background-color: #ff0000;
	border: none;
	padding: 0 20px;
	border-radius: 6px;
	text-align: center;
	flex: 0.1;

  ${customMedia.lessThan("mobile")`
    font-size: 10px;
    padding: 5px 15px;
    align-self: center;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
    padding: 5px 15px;
    align-self: center;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    width: 80px;
    font-size: 12px;
  `}

  ${customMedia.between("tablet", "desktop")`
    width: 120px;
    font-size: 16px;
  `}
`;

const StyledModal = styled(Modal)`
	display: flex;
	justify-content: center;

	.ant-modal-content {
		padding: 30px 55px;
		display: flex;
    align-items: center;
    
    ${customMedia.lessThan("mobile")`
      padding: 3px 7px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      padding: 5px 10px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      padding: 10px 25px;
    `}

    ${customMedia.between("tablet", "desktop")`
      padding: 30px 55px;
    `}
	}

	.ant-modal-body {
    text-align: center;
    
    ${customMedia.lessThan("mobile")`
      padding: 30px 55px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      padding: 30px 55px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      padding: 30px 55px;
    `}

    ${customMedia.between("tablet", "desktop")`
      padding: 30px 55px;
    `}
	}

	.ant-modal-footer {
		display: none;
	}
`;

const ModalTitle = styled.div`
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 10px;

	${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

	${customMedia.between("mobile", "largeMobile")`
    font-size: 16px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 18px;
  `}

  ${customMedia.between("tablet", "desktop")`
    font-size: 20px;
  `}
`;

const ButtonRow = styled(Row)`
	margin-top: 30px;
	display: flex;
	justify-content: center;
  gap: 50px;
  
  ${customMedia.lessThan("mobile")`
    margin-top: 15px;
  `}

	${customMedia.between("mobile", "largeMobile")`
    margin-top: 15px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    margin-top: 20px;
  `}
`;

const FilledBtn = styled(Button)`
	& {
		color: #ffffff;
		background-color: #ff6701;
		border: none;
		border-radius: 6px;
		outline: none;
    cursor: pointer;
    
    ${customMedia.lessThan("mobile")`
      font-size: 10px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 12px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 14px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 16px;
    `}
	}
`;

const UnfilledBtn = styled(Button)`
	& {
		color: #ff6701;
		background-color: #ffffff;
		border: 2px solid #ff6701;
		border-radius: 6px;
    cursor: pointer;
    
    ${customMedia.lessThan("mobile")`
      font-size: 10px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 12px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 14px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 16px;
    `}
	}
`;

const PaginationRow = styled(Row)`
  width: 100%;
	margin: 30px auto;
	justify-content: center;

	${customMedia.lessThan("mobile")`
    margin: 20px auto;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    margin: 20px auto;
  `}

	${customMedia.between("largeMobile", "tablet")`
    margin: 20px auto;
  `}
`;

const SpinContainer = styled.div`
	width: 100%;
	height: 80vh;

	display: flex;
	justify-content: center;
	align-items: center;

	${customMedia.lessThan("mobile")`
    height: 40vh;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    height: 40vh;
  `}

	${customMedia.between("largeMobile", "tablet")`
    height: 40vh;
  `}
`;

const MemberNotFound = styled(NotFound)`
	& {
		height: 100px;
		font-size: 16px;

    ${customMedia.lessThan("mobile")`
      font-size: 10px;
    `}

    ${customMedia.between("mobile", "largeMobile")`
      font-size: 10px;
    `}

    ${customMedia.between("largeMobile", "tablet")`
      font-size: 12px;
    `}

    ${customMedia.between("tablet", "desktop")`
      font-size: 14px;
    `}
	}
`;
