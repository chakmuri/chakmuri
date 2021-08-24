import React from 'react';
import styled from 'styled-components';

/**
 * 임시 레이아웃용 컴포넌트 - 수정 예정
 */

const TempMap = styled.section`
  height: auto;
  margin-bottom: 100px;
`;

const Map = (props) => {
  return (
    <TempMap>
      <img src="assets/images/tempMap.png" alt="asdf" />
    </TempMap>
  );
};

export default Map;