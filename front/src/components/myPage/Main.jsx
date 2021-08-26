import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Tabs, Row, Divider, message } from "antd";
import styled from "styled-components";
import MyCommentList from "./MyCommentList";
import LikedClubList from "./LikedClubList";
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

const MidTitle = styled.div`
	width: 100%;
	font-family: Roboto;
	font-size: 20px;
	margin-bottom: 10px;
`;

const LargeText = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 15px;
`;

const Text = styled.div`
	font-size: 16px;
`;

const TextBox = styled.div`
	flex: 1;
`;

const DeleteBtnContainer = styled.div`
	width: 100%;
	border: 1px solid #c4c4c4;
	border-radius: 5px;
	padding: 25px;
	display: flex;
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
				<TabPane tab="내 댓글" key="1">
					<TabContainer gutter={[0, 98]}>
						<Row>
							<MyCommentList />
						</Row>
					</TabContainer>
				</TabPane>
				<TabPane tab="좋아요한 독서모임" key="2">
					<TabContainer gutter={[0, 98]}>
						<Row>
							<LikedClubList />
						</Row>
					</TabContainer>
				</TabPane>
				<TabPane tab="독서모임 관리" key="3">
					<TabContainer gutter={[0, 16]}>
						<MidTitle>정보 수정</MidTitle>
						<EditForm />
						<Divider />
						<DeleteBtnContainer>
							<TextBox>
								<LargeText>독서모임 삭제하기</LargeText>
								<Text>
									한 번 독서모임을 삭제하면 복구할 수 없습니다. 신중하게
									결정해주세요!
								</Text>
							</TextBox>
							<DeleteBtn>독서모임 삭제</DeleteBtn>
						</DeleteBtnContainer>
					</TabContainer>
				</TabPane>
			</StyledTabs>
		</Wrapper>
	);
};

export default Main;
