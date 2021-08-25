import React from 'react';
import styled from "styled-components";
import SearchBar from '../board/SearchBar';
import Button from '../common/Button'

/**
 * 독서 모임 찾기 영역입니다.
 * 
 * 여기에서는 원하는 독서 모임의 이름을 검색하여 특정한 독서 모임을 찾을 수 있고, 검색 바 밑에 여러 가지 특정한
 * 버튼(==태그)를 누르면, 그에 맞는 태그들만 필터링해서 렌더링합니다. ** 최대 3개까지 가능
 */

const SearchTitle = styled.div` /* 독서 모임 찾기 */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  justify-content: center;
`;

const SearchTitleText = styled.span`
  margin-left: 8px;
`;

const BtnSection = styled.article` /* 태그 필터 버튼 */
  width: 850px;
  margin: auto;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  width: auto;
  display: flex;
  justify-content: space-around;
`;

const BoardButton = styled(Button)` /* common/button.jsx에서 상속받음 */
	text-align: center;
	border-radius: 30px;
	color: #ff6701;
	background-color: #ffffff;
	border: 1px solid #ff6701;
	padding: 10px 20px;
	transition: all 0.3s;

	&:hover {
		color: #ffffff;
		background-color: #ff6701;
	}
`;

const BtnText = styled.div`
  width: 120px;
`;

const Search = (props) => { 
  return (
    <>
      <SearchTitle>
        <img src="assets/images/boardSearchLogo.png" alt="icon.png"/>
        <SearchTitleText>독서 모임 찾기</SearchTitleText> 
      </SearchTitle>
      <SearchBar />
      <BtnSection>
        <BtnWrapper>
          <BoardButton>
            <BtnText>소수정예</BtnText>
          </BoardButton>
          <BoardButton>
            <BtnText>온라인</BtnText>
          </BoardButton>
          <BoardButton>
            <BtnText>오프라인</BtnText>
          </BoardButton>
          <BoardButton>
            <BtnText>온・오프라인</BtnText>
          </BoardButton>
        </BtnWrapper>
        <BtnWrapper>
          <BoardButton>
            <BtnText>수도권</BtnText>
          </BoardButton>
          <BoardButton>
            <BtnText>지방</BtnText>
          </BoardButton>
          <BoardButton>
            <BtnText>친목</BtnText>
          </BoardButton>
          <BoardButton>
            <BtnText>독서 외 활동</BtnText>
          </BoardButton>
        </BtnWrapper>
      </BtnSection>
    </>
  );
};

export default Search;