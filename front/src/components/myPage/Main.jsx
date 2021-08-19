import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const Main = () => {
	return (
		<Wrapper>
			<Tabs defaultActiveKey="1">
				<TabPane tab="내 활동" key="1">
					<div>내가 쓴 댓글</div>
					<div>내가 좋아요한 독서모임</div>
					<div>내가 참여중인 독서모임</div>
				</TabPane>
				<TabPane tab="독서모임" key="2">
					<div>내가 운영중인 독서모임</div>
				</TabPane>
			</Tabs>
		</Wrapper>
	);
};

export default Main;
