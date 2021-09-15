import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import { customMedia } from "../../GlobalStyles";

import MapContainer from "../common/MapContainer";

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
					{props.club.publisher === "undefined"
						? "미입력"
						: props.club.publisher}
					, {props.club.publishedAt !== 0 ? props.club.publishedAt : "미입력"}{" "}
				</SubTitle>
				<Contents>{props.club.bookDescription}</Contents>
			</TextBox>
			<Divider />
			<Title>모임 장소</Title>
			<TextBox>
				<SubTitle>
					{props.club.addressStreet !== "undefined"
						? props.club.addressStreet
						: ""}{" "}
					{props.club.addressDetail !== "undefined"
						? props.club.addressDetail
						: ""}
				</SubTitle>
			</TextBox>
			<MapWrapper>
				<MapContainer
					searchSpot={props.club.addressStreet + " " + props.club.addressDetail}
				/>
			</MapWrapper>
		</DetailInfoContainer>
	);
};

export default DetailInfo;

const DetailInfoContainer = styled.div`
	margin: 60px 0;
`;

const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
  margin-bottom: 30px;
  
  ${customMedia.lessThan("mobile")`
    font-size: 18px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 18px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 20px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 22px;
  `}
`;

const SubTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
  margin-bottom: 15px;
  
  ${customMedia.lessThan("mobile")`
    font-size: 16px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 16px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 18px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const Contents = styled.div`
	font-size: 16px;
  white-space: pre-wrap;
  
  ${customMedia.lessThan("mobile")`
    font-size: 14px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 14px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 14px;
  `}
`;

const TextBox = styled.div`
	margin-bottom: 40px;
`;

const MapWrapper = styled.div`
	width: 996px;
  height: 250px;
  
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
