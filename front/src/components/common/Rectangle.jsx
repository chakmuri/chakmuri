import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #F98404;
  border-radius: 5px;
  cursor: pointer;
`;

const Rectangle = (props) => {
  return (
    <Wrapper>
      {props.children};
    </Wrapper>
  );

  
};

export default Rectangle;