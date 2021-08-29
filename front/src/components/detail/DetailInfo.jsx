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

const DetailInfo = ({ ...props }) => {
	return (
		<DetailInfoContainer>
			<Title>상세 설명</Title>
			<TextBox>
				<SubTitle>{props.club.contents}</SubTitle>
				<Contents>{props.club.description}</Contents>
			</TextBox>
			<Divider />
			<Title>선정 도서</Title>
			<TextBox>
				<SubTitle>
					{props.club.bookTitle}, {props.club.author},{" "}
					{props.club.publisher ? props.club.publisher : "미정"},{" "}
					{props.club.publishedAt ? props.club.publishedAt : "미정"}{" "}
				</SubTitle>
				<Contents>{props.club.bookDescription}</Contents>
			</TextBox>
			<Divider />
			<Title>모임 장소</Title>
			<MapWrapper>
				<MapContainer
					searchSpot={props.club.addressStreet + " " + props.club.addressDetail}
				/>
			</MapWrapper>
		</DetailInfoContainer>
	);
};

export default DetailInfo;
