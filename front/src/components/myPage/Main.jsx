import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Tabs, Row, Divider, message } from "antd";
import styled from "styled-components";
import CommentList from "./CommentList";
import LikedClubList from "./LikedClubList";
import JoinedClubList from "./JoinedClubList";
import MemberList from "./MemberList";
import PendingMemberList from "./PendingMemberList";
import Button from "../common/Button";
import EditForm from "./EditForm";

const { TabPane } = Tabs;

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const TabContainer = styled(Row)`
	width: 100%;
	margin-top: 100px;
	padding-bottom: 160px;
`;

const StyledTabs = styled(Tabs)`
	.ant-tabs-tab-btn {
		font-size: 22px;
	}

	.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
		color: #fa9423;
		font-weight: bold;
	}

	.ant-tabs-ink-bar {
		border: 2px solid #fa9423;
	}
`;

const TitleRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;

const BigTitle = styled.div`
	width: 100%;
	font-family: Roboto;
	font-weight: bold;
	font-size: 24px;
`;

const MidTitle = styled.div`
	width: 100%;
	font-family: Roboto;
	font-size: 20px;
	margin-bottom: 20px;
`;

const SmallTitle = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

const DeleteBtn = styled(Button)`
	width: 140px;
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	background-color: #ff0000;
	border: none;
	padding: 10px 20px;
	border-radius: 6px;
	text-align: center;
`;

const Main = (props) => {
	// let history = useHistory();
	// console.log(props.params);
	// const clubId = props.match.params.id;

	// const handleDeleteClub = async () => {
	// 	try {
	// 		const res = await axios.delete(`/clubs/${clubId}`);
	// 		if (res.status === 200) {
	// 			message.success("독서모임이 성공적으로 삭제되었습니다.");
	// 		} else {
	// 			message.error("독서모임 삭제에 실패하였습니다.");
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<Wrapper>
			<StyledTabs defaultActiveKey="1">
				<TabPane tab="내 활동" key="1">
					<TabContainer gutter={[0, 98]}>
						<Row>
							<BigTitle>내가 쓴 댓글</BigTitle>
							<CommentList />
						</Row>
						<Row>
							<BigTitle>내가 좋아요한 독서모임</BigTitle>
							<LikedClubList />
						</Row>
						<Row>
							<BigTitle>내가 참여중인 독서모임</BigTitle>
							<JoinedClubList />
						</Row>
					</TabContainer>
				</TabPane>
				<TabPane tab="독서모임" key="2">
					<TabContainer gutter={[0, 98]}>
						<Row>
							<TitleRow>
								<BigTitle>내가 운영중인 독서모임</BigTitle>
								<DeleteBtn>독서모임 삭제</DeleteBtn>
							</TitleRow>
							<MidTitle>참여자 관리</MidTitle>
							<SmallTitle>승인 대기자</SmallTitle>
							<PendingMemberList />
							<Divider />
							<SmallTitle>참여자 목록</SmallTitle>
							<MemberList />
						</Row>
						<Row>
							<MidTitle>정보 수정</MidTitle>
							<EditForm />
						</Row>
					</TabContainer>
				</TabPane>
			</StyledTabs>
		</Wrapper>
	);
};

export default Main;
