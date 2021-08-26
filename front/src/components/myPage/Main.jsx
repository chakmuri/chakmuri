import React from "react";
import { Tabs, Row, Divider } from "antd";
import styled from "styled-components";
import MyCommentList from "./MyCommentList";
import LikedClubList from "./LikedClubList";

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

const LargeText = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 15px;
`;

const Text = styled.div`
	font-size: 16px;
`;

const DeleteBtnContainer = styled.div`
	width: 100%;
	border: 1px solid #c4c4c4;
	border-radius: 5px;
	padding: 25px;
`;

const Main = () => {
	return (
		<Wrapper>
			<StyledTabs defaultActiveKey="1">
				<TabPane tab="내 댓글" key="1">
					<TabContainer gutter={[0, 98]}>
						<Row>
							<BigTitle>내가 쓴 댓글</BigTitle>
							<MyCommentList />
						</Row>
					</TabContainer>
				</TabPane>
				<TabPane tab="좋아요한 독서모임" key="2">
					<TabContainer gutter={[0, 98]}>
						<Row>
							<BigTitle>내가 좋아요한 독서모임</BigTitle>
							<LikedClubList />
						</Row>
					</TabContainer>
				</TabPane>
				<TabPane tab="독서모임 관리" key="3">
					<TabContainer gutter={[0, 98]}>
						<MidTitle>정보 수정</MidTitle>
						<Divider />
						<DeleteBtnContainer>
							<LargeText>독서모임 삭제하기</LargeText>
							<Text>
								한 번 독서모임을 삭제하면 복구할 수 없습니다. 신중하게
								결정해주세요!
							</Text>
						</DeleteBtnContainer>
					</TabContainer>
				</TabPane>
			</StyledTabs>
		</Wrapper>
	);
};

export default Main;
