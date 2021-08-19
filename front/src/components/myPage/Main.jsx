import React from "react";
import { Tabs, Row, Divider } from "antd";
import styled from "styled-components";
import CommentList from "./CommentList";
import LikedClubList from "./LikedClubList";
import JoinedClubList from "./JoinedClubList";
import MemberList from "./MemberList";
import PendingMemberList from "./PendingMemberList";

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

const BigTitle = styled.div`
	width: 100%;
	font-family: Roboto;
	font-weight: bold;
	font-size: 24px;
	margin-bottom: 40px;
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

const Main = () => {
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
							<BigTitle>내가 운영중인 독서모임</BigTitle>
							<MidTitle>참여자 관리</MidTitle>
							<SmallTitle>승인 대기자</SmallTitle>
							<PendingMemberList />
							<Divider />
							<SmallTitle>참여자 목록</SmallTitle>
							<MemberList />
						</Row>
						<MidTitle>정보 수정</MidTitle>
					</TabContainer>
				</TabPane>
			</StyledTabs>
		</Wrapper>
	);
};

export default Main;
