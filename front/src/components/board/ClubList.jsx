import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Checkbox, Select, message } from "antd";
import ClubCard from "../common/ClubCard";

const { Option } = Select;

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	margin: 50px 0;
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 24px;
	flex: 5;
`;

const CheckboxFilter = styled(Checkbox)`
	font-family: Roboto;
	font-size: 18px;
	flex: 0.7;

	.ant-checkbox-inner {
		width: 20px;
		height: 20px;
	}

	.ant-checkbox-checked .ant-checkbox-inner {
		background-color: #fea82f;
		border-color: #fea82f;
	}

	.ant-checkbox-checked::after {
		border-color: #fea82f;
	}

	.ant-checkbox-wrapper:hover .ant-checkbox-inner,
	.ant-checkbox:hover .ant-checkbox-inner,
	.ant-checkbox-input:focus + .ant-checkbox-inner {
		border-color: #fea82f;
	}
`;

const SortFilter = styled(Select)`
	flex: 0.7;

	.ant-select-selection-item {
		font-size: 16px;
	}

	&:not(.ant-select-disabled):hover .ant-select-selector {
		border-color: #fea82f;
	}
`;

const ClubCardContainer = styled.div`
	margin-bottom: 90px;
`;

const ListRow = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 40px;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

const ClubList = () => {
	const [sortBy, setSortBy] = useState("");
	const [isChecked, setIsChecked] = useState();
	const [clubs, setClubs] = useState([]);

	const fetchSortedData = async () => {
		try {
			const res = await axios.get("/clubs", {
				params: { sortby: sortBy, tags: "", clubStatus: isChecked },
			});

			if (res.status === 200) {
				setClubs(res.data);
			} else {
				message.error("데이터를 불러오는데 실패했습니다.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Wrapper>
			<TitleRow>
				<Title>N개의 독서모임</Title>
				<CheckboxFilter
					onChange={(e) => {
						setIsChecked(e.target.checked);
					}}
				>
					모집중
				</CheckboxFilter>
				<SortFilter showSearch placeholder="정렬필터">
					<Option
						value="date"
						onChange={(value) => setSortBy(value)}
						onClick={fetchSortedData}
					>
						최신순
					</Option>
					<Option
						value="like"
						onChange={(value) => setSortBy(value)}
						onClick={fetchSortedData}
					>
						좋아요순
					</Option>
				</SortFilter>
			</TitleRow>
			<ClubCardContainer>
				<ListRow>
					<ClubCard />
					<ClubCard />
					<ClubCard />
				</ListRow>
				<ListRow>
					<ClubCard />
					<ClubCard />
					<ClubCard />
				</ListRow>
				<ListRow>
					<ClubCard />
					<ClubCard />
					<ClubCard />
				</ListRow>
			</ClubCardContainer>
		</Wrapper>
	);
};

export default ClubList;
