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
`;

const SearchBar = (props) => {
	const onSearch = (value) => {
		console.log(value);
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
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;
