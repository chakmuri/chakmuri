import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const SearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0;
`;

const StyledSearchBar = styled(Search)`
	width: 600px;

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

const SearchBar = (props) => {
	const onSearch = (value) => {
		props.setKeyword(value);
		value = "";
	};

	const onReset = () => {
		props.setKeyword("");
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
					props.setKeyword(e.target.value);
					onReset();
				}}
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;
