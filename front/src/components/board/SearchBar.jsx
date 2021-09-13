import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import { customMedia } from "../common/GlobalStyles";

const SearchBar = (props) => {
	const onSearch = (value) => {
		props.setKeyword(value);
	};

	return (
		<SearchBarContainer>
			<StyledSearchBar
				allowClear
				enterButton
				size="large"
				placeholder="독서모임 검색"
				onSearch={onSearch}
				onPressEnter={(e) => {
					onSearch(e.target.value);
				}}
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;

const { Search } = Input;

const SearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0;
`;

const StyledSearchBar = styled(Search)`
  width: 600px;
  
  ${customMedia.lessThan("mobile")`
    width: 275px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 303px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 305px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 440px;
  `}

  .ant-input-lg{
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
    font-size: 16px;
  `}
    
  }

	.ant-btn-primary {
		border-color: #ff6701;
		background-color: #ff6701;
	}

	.ant-input-wrapper:hover {
		border-color: #fea82f;
	}

	.ant-input-affix-wrapper:focus,
	.ant-input-affix-wrapper-focused {
		border-color: #fea82f;
	}

	.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
		border-color: #fea82f;
	}

	.ant-input-affix-wrapper.ant-input-affix-wrapper-focused.ant-input-affix-wrapper-lg {
		border-color: #fea82f;
		box-shadow: none;
	}
`;
