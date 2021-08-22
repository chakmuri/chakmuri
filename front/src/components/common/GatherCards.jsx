import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import Tags from "../common/Tags";

/**
 * 독서 모임 카드 공용 컴포넌트
 * 
 *  독서모임 이름
 *  
 *  한 줄 소개글
 * 
 *  태그와 좋아요
 */

const { Meta } = Card;

const Wrapper = styled(Card)`

  width: 346px;
  height: 350px;
  border: solid 1px #E5E5E5;
  border-radius: 0px 0px 10px 10px;

/* ant-desing 코드 ~~ */

  .ant-card-meta-title { /* 독서모임 이름 */
		font-family: Roboto;
		font-weight: bold;
		font-size: 20px;
		line-height: 36px;
    margin-left: 15px; /* 임시 마진 간격 */ 
	}
	.ant-card-meta-description { /* 한 줄 소개 */
		font-family: Roboto;
		font-size: 16px;
		line-height: 36px;
		color: black;
    margin-bottom: 45px;
    margin-left: 15px; /* 임시 마진 간격 */
	}

  /* ~~ ant-desing 코드 */



  .container { /* 하단 */
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
    margin-left: 15px; /* 임시 마진 간격 */
  }

	.like {
		display: flex;
		flex-direction: column;
		align-items: center;
    cursor: pointer;
    margin-right: 15px; /* 임시 마진 간격 */
	}
`;

const GatherCards = (props) => {
  return <>
    <Wrapper
      hoverable
        cover={
          <img src="assets/images/gatherCardThumbnail.png" alt="images" />
        }
    >
      <Meta title="독서 모임 이름" description="한 줄 소개" />
      <div className="container">
        <span className="tags">
          <Tags />
          <Tags />
        </span>
        <div className="like">
          <img className="likeButton" src="assets/images/like.png" alt="icon" />
          <span>9,999</span>
        </div>
      </div>
    </Wrapper>
  </>
};

export default GatherCards;