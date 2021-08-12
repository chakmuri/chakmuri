import React from 'react';
import Navbar from '../components/common/navbar'; // 임시
import Main from '../components/board/main';
import Footer from '../components/common/footer'; // 임시

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