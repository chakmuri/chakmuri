import React from "react";
import styled from "styled-components";
import MapContainer from "../common/MapContainer";
import { Divider } from "antd";

const DetailInfoContainer = styled.div`
	margin: 60px 0;
`;

const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 30px;
`;

const SubTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 15px;
`;

const Contents = styled.div`
	font-size: 16px;
`;

const TextBox = styled.div`
	font-size: 16px;
	margin-bottom: 50px;
`;

const MapWrapper = styled.div`
	width: 1000px;
	height: 250px;
	margin-top: 40px;
`;

const DetailInfo = () => {
	return (
		<DetailInfoContainer>
			<Title>상세 설명</Title>
			<TextBox>
				<SubTitle>한 줄 소개</SubTitle>
				<Contents>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
				</Contents>
			</TextBox>
			<Divider />
			<Title>선정 도서</Title>
			<TextBox>
				<SubTitle>도서 정보</SubTitle>
				<Contents>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
				</Contents>
			</TextBox>
			<Divider />
			<Title>모임 장소</Title>
			<MapWrapper>
				<MapContainer />
			</MapWrapper>
		</DetailInfoContainer>
	);
};

export default DetailInfo;
