import React from 'react';
import styled from 'styled-components';
import GatherCards from '../common/gatherCards';
import GatherFilter from './gatherFilter';

/**
 * 책무리의 등록된/마감된 모든 독서 모임들을 렌더링해주는 영역입니다.
 * 기본적으로, DB에 있는 전체 독서 모임 데이터를 받아와서 전체를 렌더링합니다.
 * 유튜브, 페이스북과 같은 무한 스크롤입니다.
 * 
 * 모집중 -> 마감된 독서 모임을 제외합니다.
 * 필터 -> 최신순, 인기순, ...등으로 독서 모임 리스트를 필터링하여 렌더링합니다.
 */

const Wrapper = styled.div`
  font-family: Roboto;
  font-style: normal;
  margin-top: 100px; /* 간격 띄우기 */

  h2 {
    display: inline;
  }

  .gatherFilter {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    float: right;
    letter-spacing: -0.015em;
  }

  .boardCheckBox {
    margin: 0px 25px 0px 5px;
    padding-bottom: 5px;
    cursor: pointer; /* 클릭시 boardCheckedBox로 변경 + 모집중인 카드만 표시 */
  }

  .gathers {
    margin-bottom: 50px;
  }

`;

const Cards = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

const Gather = (props) => {
  return (
    <>
      <Wrapper>
        <div className="gathers">
          <h2>N개의 독서 모임</h2>
          <span className="gatherFilter">
              모집중<img src="assets/images/boardCheckBox.png" alt="checkbox" className="boardCheckBox" />
              <GatherFilter />
          </span>
        </div>
      </Wrapper>
      <Cards>
        <GatherCards />
        <GatherCards />
        <GatherCards />
      </Cards>
      <Cards>
        <GatherCards />
        <GatherCards />
        <GatherCards />
      </Cards>
      <Cards>
        <GatherCards />
        <GatherCards />
        <GatherCards />
      </Cards>
      
    </>
  )
};

export default Gather; 