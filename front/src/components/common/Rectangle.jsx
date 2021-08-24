import React from 'react';
import styled from 'styled-components';

const RectBox = styled.div`
  background: #F98404;
  border-radius: 5px;
  cursor: pointer;
`;

const Rectangle = (props) => {
  return (
    <RectBox>
      {props.children}
    </RectBox>
  );

  
};

export default Rectangle;