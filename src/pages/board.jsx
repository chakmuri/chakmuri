import React from 'react';
import Navbar from '../components/common/Navbar'; // 임시
import Main from '../components/board/Main';
import Footer from '../components/common/Footer'; // 임시

import DeadlineTag from '../components/common/deadlineTag'; // 일단 Footer 밑에 두겠습니다...

const Board = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
        <DeadlineTag /><DeadlineTag /><DeadlineTag /><DeadlineTag /><DeadlineTag /><DeadlineTag />
    </>
  )
};

export default Board;